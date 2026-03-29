export const dashboardStats = [
  { label: "Total Bookings", value: "1,248", delta: "+12% today", tone: "good" },
  { label: "Total Revenue", value: "₹2.84L", delta: "+8.4% vs last week", tone: "good" },
  { label: "Active Users", value: "8,420", delta: "+291 new", tone: "good" },
  { label: "Running Movies", value: "12", delta: "3 premieres", tone: "warn" }
];

export const quickActions = [
  { title: "Add Movie", copy: "Poster, trailer, release date, and status." },
  { title: "Create Show", copy: "Assign movie, screen, time, and price." },
  { title: "Block Seats", copy: "Handle maintenance, VIP reserves, or outages." },
  { title: "Approve Refund", copy: "Clear the queue before shift handoff." },
  { title: "Push Offer", copy: "Promote new releases and coupon campaigns." }
];

export const alerts = [
  "Screen 4 projector maintenance is due before the 07:40 PM IMAX show.",
  "8 cancelled bookings are waiting for refund approval.",
  "Weekend evening occupancy crossed 92% in Downtown branch."
];

export const dashboardAiCards = [
  {
    title: "Demand Forecast",
    value: "+18%",
    copy: "Downtown evening occupancy is likely to rise after 6:30 PM for thriller and IMAX titles."
  },
  {
    title: "Pricing Suggestion",
    value: "₹40 uplift",
    copy: "Prime-time Gold and Platinum seats can tolerate a moderate increase without hurting fill rate."
  },
  {
    title: "Seat Lock Risk",
    value: "6 stale holds",
    copy: "Checkout lock release is drifting on one screen and should be reviewed before the late show."
  },
  {
    title: "Promo Opportunity",
    value: "South Square",
    copy: "A weekday coupon push can improve low-fill afternoon shows and reactivate dormant users."
  }
];

export const dashboardAiNotes = [
  "Shift one extra evening show to Downtown if occupancy stays above 88% after 5:00 PM.",
  "Reduce refund review time for cancelled shows to protect support SLA during peak weekend traffic.",
  "Launch a targeted comeback offer for dormant users instead of a broad public discount blast.",
  "Track Screen 4 seat lock release events before opening additional premium rows."
];

export const branchCards = [
  { name: "Downtown", footfall: "1,840", occupancy: "91% occupied", status: "Peak rush" },
  { name: "South Square", footfall: "1,120", occupancy: "74% occupied", status: "Stable" },
  { name: "Riverside", footfall: "860", occupancy: "63% occupied", status: "Low demand" }
];

export const movies = [
  {
    title: "The Last Metro",
    language: "Bangla",
    genre: "Thriller",
    duration: "2h 08m",
    releaseDate: "2026-03-21",
    status: "Now Showing"
  },
  {
    title: "Orbit Run",
    language: "English",
    genre: "Sci-Fi",
    duration: "2h 22m",
    releaseDate: "2026-04-05",
    status: "Coming Soon"
  },
  {
    title: "City of Strings",
    language: "Hindi",
    genre: "Drama",
    duration: "1h 56m",
    releaseDate: "2026-03-14",
    status: "Now Showing"
  }
];

export const theatres = [
  {
    theatre: "CineTime Downtown",
    location: "Kolkata",
    screens: 4,
    seatLayout: "120 / 160 / 96 / 80",
    seatTypes: "Silver, Gold, Platinum"
  },
  {
    theatre: "CineTime South Square",
    location: "Kolkata",
    screens: 3,
    seatLayout: "140 / 120 / 54",
    seatTypes: "Regular, Gold, Recliner"
  },
  {
    theatre: "CineTime Riverside",
    location: "Howrah",
    screens: 2,
    seatLayout: "110 / 88",
    seatTypes: "Silver, Gold"
  }
];

export const theatreInsights = [
  {
    title: "Premium Seats",
    value: "248",
    copy: "Gold, Platinum, and Recliner seats available across all branches."
  },
  {
    title: "Screens Ready",
    value: "9 / 9",
    copy: "All screens are active, though one projector needs preventive maintenance."
  },
  {
    title: "Average Seat Fill",
    value: "76%",
    copy: "Evening shows are driving most of the occupancy this week."
  }
];

export const shows = [
  {
    movie: "The Last Metro",
    theatre: "Downtown / Screen 2",
    time: "11:30 AM",
    format: "2D",
    price: "₹220",
    seatsLeft: 41
  },
  {
    movie: "City of Strings",
    theatre: "South Square / Screen 1",
    time: "02:15 PM",
    format: "2D",
    price: "₹180",
    seatsLeft: 16
  },
  {
    movie: "The Last Metro",
    theatre: "Downtown / Screen 4",
    time: "07:40 PM",
    format: "IMAX",
    price: "₹430",
    seatsLeft: 8
  }
];

export const seatLockStats = [
  { label: "Active Locks", value: "43", delta: "Across 6 live shows", tone: "warn" },
  { label: "Avg Lock Window", value: "08m", delta: "Auto release enabled", tone: "good" },
  { label: "Manual Overrides", value: "5", delta: "2 high priority", tone: "warn" }
];

export const seatLockQueue = [
  {
    show: "Midnight Show / Downtown / Screen 2",
    seats: "F5, F6, F7",
    lockedBy: "Anik Ghosh",
    timeout: "03m 12s",
    state: "Active"
  },
  {
    show: "The Last Metro / Downtown / Screen 4",
    seats: "P1, P2",
    lockedBy: "POS Counter",
    timeout: "01m 48s",
    state: "Review"
  },
  {
    show: "City of Strings / South Square / Screen 1",
    seats: "G8, G9, G10",
    lockedBy: "App Checkout",
    timeout: "00m 52s",
    state: "Active"
  }
];

export const seatLockRules = [
  "Default seat lock timeout: 8 minutes",
  "Release instantly after payment failure",
  "Manager override required for VIP reserve seats",
  "Audit every manual unlock action"
];

export const seatMapHealth = [
  { title: "Held by Checkout", value: "28 seats", copy: "Temporary locks from app and web checkout sessions." },
  { title: "Manual Holds", value: "9 seats", copy: "Blocked by hall managers for maintenance or guest lists." },
  { title: "Stale Lock Risk", value: "6 seats", copy: "Locks near timeout threshold and ready for monitoring." }
];

export const seatLockIncidents = [
  {
    title: "Timeout drift detected",
    branch: "Downtown / Screen 4",
    copy: "Two checkout sessions exceeded the 8 minute rule before release sync."
  },
  {
    title: "Counter override requested",
    branch: "South Square / Screen 1",
    copy: "Front desk asked for manager approval to hold premium row seats for a guest list."
  },
  {
    title: "Payment failure release gap",
    branch: "Riverside / Screen 2",
    copy: "Three seats stayed locked after a failed UPI verification and need webhook review."
  }
];

export const bookings = [
  {
    bookingId: "CT-24091",
    customer: "Anik Ghosh",
    movie: "The Last Metro",
    seats: "G5, G6",
    paymentStatus: "Paid",
    bookingStatus: "Confirmed"
  },
  {
    bookingId: "CT-24087",
    customer: "Sara Khan",
    movie: "City of Strings",
    seats: "P1, P2, P3",
    paymentStatus: "Refund Pending",
    bookingStatus: "Cancelled"
  },
  {
    bookingId: "CT-24074",
    customer: "Ritam Das",
    movie: "The Last Metro",
    seats: "R7",
    paymentStatus: "Paid",
    bookingStatus: "Checked In"
  }
];

export const users = [
  { name: "Anik Ghosh", phone: "+91 9876543210", totalBookings: 14, status: "Active" },
  { name: "Sara Khan", phone: "+91 9123456780", totalBookings: 5, status: "Review" },
  { name: "Ritam Das", phone: "+91 9988776655", totalBookings: 22, status: "VIP" }
];

export const userAudienceStats = [
  { label: "Active Profiles", value: "8,420", delta: "+291 this week", tone: "good" },
  { label: "VIP Audience", value: "342", delta: "Premium seat loyalty", tone: "good" },
  { label: "Review Flags", value: "27", delta: "Fraud and refund watch", tone: "warn" },
  { label: "Dormant Users", value: "816", delta: "Need comeback campaign", tone: "warn" }
];

export const userSegments = [
  { title: "Frequent Watchers", value: "1,284", copy: "Booked 4 or more tickets this month across all branches." },
  { title: "High-Spend Guests", value: "246", copy: "Strong recliner, IMAX, and premium combo conversion." },
  { title: "Refund Risk Users", value: "39", copy: "Repeat cancellation and payment dispute patterns detected." },
  { title: "Comeback Audience", value: "612", copy: "Previously active users who have not booked in the last 30 days." }
];

export const userControls = [
  "Review booking history before blocking any high-value account",
  "Mark refund abuse separately from payment failure incidents",
  "Keep VIP profiles linked to branch preference and seat category choice",
  "Export flagged user actions for finance and support review"
];

export const paymentStats = [
  { label: "Successful Transactions", value: "1,206", delta: "96.6% success", tone: "good" },
  { label: "Failed Payments", value: "27", delta: "Needs retry flow", tone: "warn" },
  { label: "Refund Queue", value: "8", delta: "4 high priority", tone: "warn" }
];

export const payments = [
  { transaction: "TXN-99214", method: "UPI", amount: "₹440", state: "Success" },
  { transaction: "TXN-99202", method: "Card", amount: "₹900", state: "Refunding" },
  { transaction: "TXN-99176", method: "Wallet", amount: "₹220", state: "Success" }
];

export const reviews = [
  { user: "Moumita", movie: "The Last Metro", rating: "4.7 / 5", status: "Approved" },
  { user: "Sabbir", movie: "Orbit Run", rating: "2.1 / 5", status: "Flagged" },
  { user: "Puja", movie: "City of Strings", rating: "4.1 / 5", status: "Approved" }
];

export const notifications = [
  {
    title: "Avengers now available! Book now",
    audience: "Users",
    channel: "Push",
    scheduled: "Tomorrow, 10:00 AM"
  },
  {
    title: "Weekend combo offer live",
    audience: "Users",
    channel: "In-app",
    scheduled: "Today, 05:00 PM"
  },
  {
    title: "Show delay in Screen 4",
    audience: "Hall Managers",
    channel: "Email",
    scheduled: "Immediate"
  }
];

export const couponStats = [
  { label: "Active Coupons", value: "12", delta: "3 ending today", tone: "warn" },
  { label: "Redemptions", value: "486", delta: "+18% this week", tone: "good" },
  { label: "Discount Spend", value: "₹42.5K", delta: "Controlled", tone: "good" }
];

export const coupons = [
  { code: "FIRST50", discount: "₹50 off", usageLimit: "500", expiry: "2026-04-15" },
  { code: "WEEKEND20", discount: "20% off", usageLimit: "250", expiry: "2026-04-07" },
  { code: "IMAXNIGHT", discount: "₹120 off", usageLimit: "100", expiry: "2026-04-30" }
];

export const offerCampaigns = [
  { title: "New User Boost", value: "32% conversion", copy: "FIRST50 drives strongest first-booking conversion on app traffic." },
  { title: "Weekend Occupancy", value: "74% fill uplift", copy: "Saturday evening campaigns improve family and group seat bundles." },
  { title: "Premium Night Push", value: "₹0.86L", copy: "IMAX and recliner campaigns generate the highest margin per redemption." },
  { title: "Expiry Watch", value: "3 ending soon", copy: "Two low-performing coupon codes should be replaced before next weekend." }
];

export const offerPlaybook = [
  "Use flat discount codes for first booking conversion and app installs",
  "Reserve percentage discounts for low-fill afternoon and weekday slots",
  "Tie premium offers to IMAX, recliner, or combo upsell campaigns",
  "Stop broad promo blasts when occupancy crosses the target threshold"
];

export const settingsGroups = [
  {
    title: "Brand & App",
    items: [
      ["App Name", "CineTime"],
      ["Logo Theme", "Amber marquee"],
      ["Timezone", "Asia/Calcutta"]
    ]
  },
  {
    title: "Payments & APIs",
    items: [
      ["Primary Gateway", "Razorpay"],
      ["Fallback Mode", "UPI direct"],
      ["Webhook Status", "Connected"]
    ]
  },
  {
    title: "Operational Rules",
    items: [
      ["Seat Lock Timeout", "8 minutes"],
      ["Refund Approval", "Manual"],
      ["Auto Repeat Shows", "Enabled"]
    ]
  },
  {
    title: "Notifications",
    items: [
      ["Push Service", "Enabled"],
      ["Email Alerts", "Enabled"],
      ["Manager Escalation", "Immediate for delays"]
    ]
  }
];

export const analyticsStats = [
  { label: "Monthly Revenue", value: "₹18.6L", delta: "+11.2% vs previous month", tone: "good" },
  { label: "Avg Occupancy", value: "78%", delta: "Peak at weekend evenings", tone: "good" },
  { label: "Cancellation Rate", value: "6%", delta: "Needs refund flow review", tone: "warn" },
  { label: "Top Branch Yield", value: "₹6.2L", delta: "Downtown leads", tone: "good" }
];

export const analyticsRevenueTrend = [
  { period: "Week 1", revenue: "₹4.1L", bookings: "1,820", occupancy: "72%" },
  { period: "Week 2", revenue: "₹4.5L", bookings: "1,960", occupancy: "75%" },
  { period: "Week 3", revenue: "₹4.8L", bookings: "2,140", occupancy: "79%" },
  { period: "Week 4", revenue: "₹5.2L", bookings: "2,320", occupancy: "83%" }
];

export const analyticsBranchPerformance = [
  { branch: "Downtown", revenue: "₹6.2L", occupancy: "84%", cancellations: "3.2%" },
  { branch: "South Square", revenue: "₹5.3L", occupancy: "76%", cancellations: "5.8%" },
  { branch: "Riverside", revenue: "₹3.9L", occupancy: "68%", cancellations: "7.4%" }
];

export const analyticsMoviePerformance = [
  { movie: "The Last Metro", revenue: "₹4.7L", shows: "46", fillRate: "89%" },
  { movie: "City of Strings", revenue: "₹3.8L", shows: "39", fillRate: "78%" },
  { movie: "Orbit Run", revenue: "₹2.9L", shows: "28", fillRate: "71%" }
];

export const analyticsHighlights = [
  "Weekend prime slots between 06:30 PM and 09:30 PM generated the highest yield per seat.",
  "Downtown branch drives the strongest premium seat conversion across IMAX and late-night shows.",
  "Riverside branch cancellation rate is above target and needs checkout and refund flow review.",
  "The Last Metro remains the strongest title for dynamic pricing and extra show allocation."
];

export const supportStats = [
  { label: "Open Tickets", value: "26", delta: "7 high priority", tone: "warn" },
  { label: "Avg Resolution", value: "03h", delta: "Within SLA target", tone: "good" },
  { label: "Refund Complaints", value: "9", delta: "Need finance review", tone: "warn" },
  { label: "Resolved Today", value: "18", delta: "+6 vs yesterday", tone: "good" }
];

export const supportTickets = [
  {
    ticketId: "SUP-1024",
    user: "Sara Khan",
    issue: "Refund not received after cancelled booking",
    category: "Refund",
    priority: "High",
    status: "Review"
  },
  {
    ticketId: "SUP-1021",
    user: "Ritam Das",
    issue: "Selected seats changed after payment attempt",
    category: "Seat Issue",
    priority: "Critical",
    status: "Active"
  },
  {
    ticketId: "SUP-1017",
    user: "Moumita Roy",
    issue: "QR code not scanning at the entrance",
    category: "Ticket Validation",
    priority: "Medium",
    status: "Active"
  }
];

export const supportCategories = [
  { title: "Refund Delays", value: "9", copy: "Most complaints linked to cancelled bookings and gateway lag." },
  { title: "Seat Mismatch", value: "6", copy: "Checkout and hold-release timing issues need review." },
  { title: "Payment Errors", value: "5", copy: "Mostly card and UPI verification failures during peak hours." },
  { title: "Entry Scan Issues", value: "4", copy: "QR validation errors reported across two branches." }
];

export const supportActions = [
  "Assign ticket owner and SLA timer at creation",
  "Link every complaint to booking ID and transaction ID",
  "Escalate refund tickets to finance after 2 hours",
  "Audit every status change and customer reply"
];

export const supportLanes = [
  { title: "Refund Escalation", value: "7", copy: "Pending finance approval and payment gateway confirmation." },
  { title: "Seat Mismatch", value: "4", copy: "Checkout and lock-release conflict cases need immediate tracing." },
  { title: "Entry Validation", value: "3", copy: "QR scan and duplicate-entry issues reported at evening slots." },
  { title: "VIP Complaints", value: "2", copy: "High-value repeat customers waiting for personal callback." }
];

export const activityLogStats = [
  { label: "Events Today", value: "184", delta: "Across 11 admin actions", tone: "good" },
  { label: "Critical Changes", value: "12", delta: "Pricing, refunds, locks", tone: "warn" },
  { label: "Active Managers", value: "9", delta: "2 branch supervisors online", tone: "good" },
  { label: "Audit Gaps", value: "3", delta: "Needs policy follow-up", tone: "warn" }
];

export const activityLogs = [
  {
    timestamp: "09:12 AM",
    actor: "Rahul Sen",
    role: "Branch Manager",
    action: "Released blocked seats for Screen 4",
    module: "Seat Locking",
    target: "Downtown / Screen 4 / Row F",
    severity: "High"
  },
  {
    timestamp: "10:04 AM",
    actor: "Maya Dutta",
    role: "Finance Admin",
    action: "Approved refund request",
    module: "Payments",
    target: "Booking CT-24087",
    severity: "Medium"
  },
  {
    timestamp: "11:26 AM",
    actor: "Arif Hossain",
    role: "Hall Operator",
    action: "Updated show pricing",
    module: "Shows",
    target: "The Last Metro / 07:40 PM IMAX",
    severity: "Critical"
  },
  {
    timestamp: "12:08 PM",
    actor: "Nadia Roy",
    role: "Support Lead",
    action: "Escalated complaint ticket",
    module: "Support",
    target: "SUP-1021",
    severity: "Medium"
  }
];

export const activityPolicies = [
  "Track every refund approval with actor, booking ID, and before/after payment state",
  "Log manual seat unlocks and seat blocks with branch, screen, and reason code",
  "Capture show pricing changes with effective time and manager confirmation",
  "Store ticket, support, and user status changes inside a single audit stream"
];

export const activityHighlights = [
  {
    title: "Refund Approvals",
    value: "8 events",
    copy: "Finance actions are concentrated between 09:30 AM and 11:00 AM across pending cancellations."
  },
  {
    title: "Seat Overrides",
    value: "5 events",
    copy: "Most manual holds happened on premium rows before evening peak occupancy."
  },
  {
    title: "Pricing Updates",
    value: "3 events",
    copy: "High-value IMAX and weekend show edits should stay under manager review."
  },
  {
    title: "Support Escalations",
    value: "6 events",
    copy: "Complaint escalations rose after payment and seat mismatch incidents."
  }
];
