// Jobs
const jobs = [
  // job 1
  {
    id: 1,
    ownerId: 2,
    name: "Occupational Therapist",
    description: "Vestibulum ante ipsum primis in faucibus orci",
    category: "Finance",
    estimatedBudget: "200",
    startDate: "1981-08-22T23:22:53Z",
    completionDateExpected: "1982-08-22T23:22:53Z",
    skills: [
      {
        name: "Maecenas",
      },
      {
        name: "Fusce posuere",
      },
    ],
    difficulty: 2,
    city: "Timisoara",
    address: "Sed sagittis",
    applicants: [],
    assignedHandyMan: 0,
    jobComments: [
      {
        title: "Aliquam",
        body: "habitasse platea dictumst",
      },
    ],
  },
  // job 2
  {
    id: 2,
    ownerId: 2,
    name: "Account Executive",
    description: "Morbi sem mauris",
    category: "Account Executive",
    estimatedBudget: "412.532",
    startDate: "2001-08-22T23:22:53Z",
    completionDateExpected: "2003-08-22T23:22:53Z",
    skills: [
      {
        name: "sit amet diam in magna",
      },
      {
        name: "diam in magna",
      },
    ],
    difficulty: 4,
    city: "Timisoara",
    address: "platea dictumst",
    applicants: [
      {
        id: 4,
      },
    ],
    assignedHandyMan: 0,
    jobComments: [],
  },
  // job 3
  {
    id: 3,
    ownerId: 2,
    name: "Media Manager I",
    description: " rhoncus aliquam lacus",
    category: "Technology",
    estimatedBudget: "2003.032",
    startDate: "1981-04-22T23:22:53Z",
    completionDateExpected: "1982-01-22T23:22:53Z",
    skills: [
      {
        name: "Nulla",
      },
    ],
    difficulty: 3,
    city: "Timisoara",
    address: "metus arcu",
    applicants: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
    assignedHandyMan: 0,
    jobComments: [
      {
        title: "Aliquam",
        body: "habitasse platea dictumst",
      },
      {
        title: "Hana",
        body: "agittis sapien. Cum sociis natoque",
      },
    ],
  },
  // job 4
  {
    id: 4,
    ownerId: 5,
    name: "Assistant Professor",
    description: "Donec quis orci eget orci",
    category: "Finance",
    estimatedBudget: "200",
    startDate: "1981-08-22T23:22:53Z",
    completionDateExpected: "1982-08-22T23:22:53Z",
    skills: [
      {
        name: "Cum sociis natoque",
      },
      {
        name: "natoque",
      },
      {
        name: "nec dui",
      },
    ],
    difficulty: 4,
    city: "Timisoara",
    address: "Vivamuss",

    applicants: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 4,
      },
    ],
    assignedHandyMan: 4,
    jobComments: [
      {
        title: "Aliquam",
        body: "habitasse platea dictumst",
      },
    ],
  },
];
// Users
const users = [
  {
    id: 1,
    handyManId: 4,
    firstName: "Jarad",
    lastName: "Williscroft",
    email: "jwilliscroft0@nationalgeographic.com",
    phone: "5571359939",
    gender: "Male",
    birthDate: "1994-03-07T07:48:19Z",
    userName: "jwilliscroft0",
    password: "uBDKkeogRa",
    employedHandyMen: [
      {
        id: 1,
      },
    ],
  },
  {
    id: 2,
    handyManId: 0,
    firstName: "Gaylord",
    lastName: "Childerhouse",
    email: "gchilderhouse1@fc2.com",
    phone: "4867763168",
    gender: "Male",
    birthDate: "1981-08-22T23:22:53Z",
    userName: "gchilderhouse1",
    password: "zHb1EET1I",
    employedHandyMen: [
      {
        id: 4,
      },
    ],
  },
  {
    id: 3,
    handyManId: 0,
    firstName: "Rudd",
    lastName: "Whewill",
    email: "rwhewill3@huffingtonpost.com",
    phone: "2029224424",
    gender: "Male",
    birthDate: "1980-05-14T22:43:23Z",
    userName: "rwhewill3",
    password: "TOQp4YKcX04",
    employedHandyMen: [],
  },
  {
    id: 4,
    handyManId: 2,
    firstName: "Kerri",
    lastName: "Folke",
    email: "kfolke6@berkeley.edu",
    phone: "1204058501",
    gender: "Female",
    birthDate: "2010-03-02T12:27:41Z",
    userName: "kfolke6",
    password: "MCQU4KUqD8L",
    employedHandyMen: [
      {
        id: 4,
      },
      {
        id: 1,
      },
    ],
  },
  {
    id: 5,
    handyManId: 1,
    firstName: "Amandi",
    lastName: "Arnason",
    email: "aarnason7@stumbleupon.com",
    phone: "5737429713",
    gender: "Female",
    birthDate: "1977-07-04T16:50:28Z",
    userName: "aarnason7",
    password: "jDPxnYgp",
    employedHandyMen: [
      {
        id: 4,
      },
    ],
  },
];
// HandyMen
const handyMen = [
  {
    id: 1,
    areaOfInterest: "Consumer Services",
    skills: [
      {
        name: "Suspendisse",
      },
      {
        name: "vulputate",
      },
    ],
    languages: [
      {
        name: "English",
      },
    ],
    city: "Timisoara",
    address: "Nam congue",
    companyName: "",
    companyPhone: "",
    companyWebsite: "",
    companyAddress: "",
    experience: [
      {
        name: "vehicula consequat",
      },
    ],
    jobsCompleted: [
      {
        id: 1,
      },
    ],
  },
  {
    id: 2,
    areaOfInterest: "Technology",
    skills: [
      {
        name: "vehicula consequat",
      },
      {
        name: "imperdiet",
      },
    ],
    languages: [
      {
        name: "English",
      },
      {
        name: "German",
      },
    ],
    city: "Timisoara",
    address: "rhoncus. Mauris eni",
    companyName: "Mauris",
    companyPhone: "3144728445",
    companyWebsite: "fpudneyi@columbia.edu",
    companyAddress: "tortor risus",
    experience: [
      {
        name: "consequat",
      },
      {
        name: "adipiscing molestie",
      },
    ],
    jobsCompleted: [
      {
        id: 2,
      },
    ],
  },
  {
    id: 4,
    areaOfInterest: "Finance",
    skills: [
      {
        name: "tortor id nulla ultrices",
      },
      {
        name: "volutpa",
      },
      {
        name: "pede loborti",
      },
    ],
    languages: [
      {
        name: "German",
      },
    ],
    city: "Timisoara",
    address: "commodo vulputate",
    companyName: "",
    companyPhone: "",
    companyWebsite: "",
    companyAddress: "",
    experience: [
      {
        name: "adipiscing molestie",
      },
    ],
    jobsCompleted: [
      {
        id: 4,
      },
    ],
  },
];
// Reviews
const reviews = [
  {
    id: 1,
    rating: 3,
    completed: true,
    completedOntime: true,
    comment:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  },
  {
    id: 2,
    rating: 1,
    completed: false,
    completedOntime: false,
    comment:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
  },
  {
    id: 4,
    rating: 5,
    completed: true,
    completedOntime: true,
    comment:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
  },
  {
    id: 5,
    rating: 2,
    completed: true,
    completedOntime: false,
    comment:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  {
    id: 8,
    rating: 4,
    completed: true,
    completedOntime: true,
    comment:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
  },
];

module.exports = {
  jobs,
  users,
  handyMen,
  reviews,
};
