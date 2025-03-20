import {
  ChartLine,
  Gamepad2Icon,
  HeartHandshake,
  House,
  MessageCircleQuestion,
  Trophy,
  User
} from "lucide-react"

export const MenuItmes = [
  {
    title: "Main",
    items: [
      {
        id: 1,
        url: "/admin",
        title: "Home",
        icon: House
      },
      {
        id: 2,
        title: "Users",
        url: "/users",
        icon: User
      },
      {
        id: 3,
        title: "Terms & Condition",
        url: "/terms-condition",
        icon: HeartHandshake
      }
    ]
  },
  {
    title: "Content",
    items: [
      {
        id: 4,
        title: "Games",
        url: "/games",
        icon: Gamepad2Icon
      },
      {
        id: 5,
        title: "Rewards",
        url: "/rewards",
        icon: Trophy
      },
      {
        id: 6,
        title: "Questions",
        url: "/questions",
        icon: MessageCircleQuestion
      }
    ]
  },
  {
    title: "Statistic",
    items: [
      {
        id: 7,
        title: "Static",
        url: "/statics",
        icon: ChartLine
      }
    ]
  }
]
