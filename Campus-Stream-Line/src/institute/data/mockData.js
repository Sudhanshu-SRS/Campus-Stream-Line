// Mock Applications
export const mockApplications = [
  {
    id: "APP001",
    studentName: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    photo: "",
    course: "B.Tech Computer Science",
    courseId: "CSE001",
    dateApplied: "2024-01-15",
    status: "pending",
    previousEducation: "12th Science - CBSE",
    marks: "92%",
    documents: [
      { id: "DOC001", name: "10th Marksheet.pdf", type: "marksheet", status: "verified", url: "#" },
      { id: "DOC002", name: "12th Marksheet.pdf", type: "marksheet", status: "pending", url: "#" },
      { id: "DOC003", name: "Aadhar Card.pdf", type: "identity", status: "verified", url: "#" },
    ],
    statusHistory: [
      { status: "submitted", date: "2024-01-15", note: "Application submitted" },
    ],
  },
  {
    id: "APP002",
    studentName: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    photo: "",
    course: "MBA Finance",
    courseId: "MBA001",
    dateApplied: "2024-01-14",
    status: "accepted",
    previousEducation: "B.Com - Mumbai University",
    marks: "78%",
    documents: [
      { id: "DOC004", name: "Degree Certificate.pdf", type: "certificate", status: "verified", url: "#" },
      { id: "DOC005", name: "Experience Letter.pdf", type: "experience", status: "verified", url: "#" },
    ],
    statusHistory: [
      { status: "submitted", date: "2024-01-14", note: "Application submitted" },
      { status: "in-review", date: "2024-01-16", note: "Documents under verification" },
      { status: "accepted", date: "2024-01-18", note: "Application approved" },
    ],
  },
];

// Mock Courses
export const mockCourses = [
  {
    id: "CSE001",
    name: "B.Tech Computer Science",
    duration: "4 Years",
    fees: 150000,
    intake: 120,
    eligibility: "10+2 with PCM, min 60%",
    isOpen: true,
    applicationsCount: 45,
  },
  {
    id: "MBA001",
    name: "MBA Finance",
    duration: "2 Years",
    fees: 250000,
    intake: 60,
    eligibility: "Graduate with 50%, CAT/MAT score",
    isOpen: true,
    applicationsCount: 32,
  },
];

// Mock Announcements
export const mockAnnouncements = [
  {
    id: "ANN001",
    title: "Admission Portal Open for 2024-25",
    content:
      "We are pleased to announce that the admission portal for the academic year 2024-25 is now open.",
    target: "all",
    status: "published",
    createdAt: "2024-01-01",
  },
];

// Mock Interviews
export const mockInterviews = [
  {
    id: "INT001",
    applicantId: "APP002",
    applicantName: "Priya Patel",
    course: "MBA Finance",
    date: "2024-01-28",
    time: "10:00 AM",
    mode: "offline",
    notes: "Bring original documents",
  },
];

// Mock Institute Profile
export const mockInstituteProfile = {
  name: "National Institute of Technology",
  logo: "",
  location: "Bangalore, Karnataka, India",
  about:
    "National Institute of Technology is a premier technical institution offering world-class education.",
  naacGrade: "A++",
  nirfRanking: 15,
  email: "admissions@nit.edu.in",
  phone: "+91 80 2656 1234",
};

// Mock Settings
export const mockSettings = {
  applicationsOpen: true,
  deadline: "2024-03-31",
};

// Chart data
export const monthlyApplicationsData = [
  { month: "Aug", applications: 45 },
  { month: "Sep", applications: 78 },
  { month: "Oct", applications: 120 },
  { month: "Nov", applications: 156 },
  { month: "Dec", applications: 189 },
  { month: "Jan", applications: 210 },
];

export const applicationsByCourse = [
  { name: "B.Tech CS", value: 45 },
  { name: "MBA", value: 32 },
  { name: "M.Tech DS", value: 28 },
  { name: "BBA", value: 56 },
  { name: "B.Tech ME", value: 23 },
  { name: "B.Tech CE", value: 18 },
];

export const acceptanceData = [
  { name: "Accepted", value: 65, color: "hsl(142, 76%, 36%)" },
  { name: "Rejected", value: 15, color: "hsl(0, 84%, 60%)" },
  { name: "Pending", value: 20, color: "hsl(45, 93%, 47%)" },
];
