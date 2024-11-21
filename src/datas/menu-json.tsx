import {
  Axe,
  BookOpenCheck,
  BookOpenText,
  CalendarCheck,
  GraduationCap,
  Heart,
  House,
  LogOut,
  MessageCircleMore,
  School,
  Settings,
  User,
  UsersRound
} from "lucide-react"

export const MenuItmes = [
  {
    title: "Menu",
    items: [
      {
        id: 1,
        url: "/admin",
        title: "Home",
        icon: House
      },
      {
        id: 2,
        title: "Teacher",
        url: "/teacher",
        icon: GraduationCap
      },
      {
        id: 3,
        title: "Students",
        url: "/student",
        icon: User
      },
      {
        id: 4,
        title: "Parents",
        url: "/parent",
        icon: UsersRound
      },
      {
        id: 5,
        title: "Classes",
        url: "/about",
        icon: School
      },
      {
        id: 6,
        title: "Lessons",
        url: "/services",
        icon: BookOpenText
      },
      {
        id: 7,
        title: "Exams",
        url: "/contact",
        icon: Heart
      },
      {
        id: 8,
        title: "Assigments",
        url: "/contact",
        icon: BookOpenCheck
      },
      {
        id: 9,
        title: "Events",
        url: "/contact",
        icon: CalendarCheck
      },
      {
        id: 10,
        title: "Messages",
        url: "/contact",
        icon: MessageCircleMore
      },
      {
        id: 11,
        title: "Announcements",
        url: "/contact",
        icon: Axe
      }
    ]
  },
  {
    title: "Other",
    items: [
      {
        id: 1,
        title: "Profile",
        url: "/",
        icon: User
      },
      {
        id: 2,
        title: "Settings",
        url: "/about",
        icon: Settings
      },
      {
        id: 3,
        title: "Logout",
        url: "/contact",
        icon: LogOut
      }
    ]
  }
]
