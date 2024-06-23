const data = [
  {
    id: 1,
    title:
      'Experts Predict Unprecedented Levels of Rainfall in the Coming Weeks',
    author: 'Riley Parker',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '12 Feb 2100',
    urlToImage:
      'https://images.pexels.com/photos/414491/pexels-photo-414491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Study Finds Surprising Link Between Coffee and Improved Memory',
    author: 'Amelia Green',
    description:
      'Sometimes it’s nice to put in text just to get an idea of how text will fill in a space on your website.',
    publishedAt: '07 Jan 2100',
    urlToImage:
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'Local High School Student Wins National Science Competition',
    author: 'Leo Adams',
    description:
      'Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!',
    publishedAt: '24 Feb 2100',
    urlToImage:
      'https://images.pexels.com/photos/3380743/pexels-photo-3380743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Researchers Discover New Species of Fish in Deep Ocean Trench',
    author: 'Hiro Yamamoto',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '27 Mar 2100',
    urlToImage:
      'https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 5,
    title: 'Controversial New Law Sparks Protests in Major Cities',
    author: 'Marcus Lee',
    description:
      'There are other placeholder text alternatives like Hipster Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. While often hilarious, these placeholder passages can also lead to much of the same confusion.',
    publishedAt: '10 Feb 2100',
    urlToImage:
      'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 6,
    title: 'Innovative New App Helps People with Chronic Pain',
    author: 'Olivia Clarke',
    description:
      'Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!',
    publishedAt: '01 Jan 2100',
    urlToImage:
      'https://images.pexels.com/photos/2265482/pexels-photo-2265482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 7,
    title: 'World Leaders Gather for Historic Peace Summit',
    author: 'Mei Lin',
    description:
      'Sometimes it’s nice to put in text just to get an idea of how text will fill in a space on your website.',
    publishedAt: '16 Feb 2100',
    urlToImage:
      'https://images.pexels.com/photos/4963437/pexels-photo-4963437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 8,
    title: 'Massive Solar Flare Disrupts Communications Networks',
    author: 'Min Joo Park',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '30 Jun 2100',
    urlToImage: null,
  },
  {
    id: 9,
    title: 'Technology Company Announces Plans to Build Lunar Base',
    author: 'Raj Patel',
    description:
      'There are other placeholder text alternatives like Hipster Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. While often hilarious, these placeholder passages can also lead to much of the same confusion.',
    publishedAt: '30 Jun 2100',
    urlToImage: null,
  },
  {
    id: 10,
    title: 'Breakthrough Study Reveals Key to Longevity',
    author: 'Natalie Carter',
    description:
      'Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!',
    publishedAt: '30 Jun 2100',
    urlToImage: null,
  },
  {
    id: 11,
    title: 'Tango Geez Announces Surprise Album Release',
    author: 'Simon Scott',
    description:
      'Sometimes it’s nice to put in text just to get an idea of how text will fill in a space on your website.',
    publishedAt: '05 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 12,
    title: 'Nubo Reveals New Original Series Starring A-List Cast',
    author: 'Sunil Gupta',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '17 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 13,
    title: 'Up-and-Coming Actor Lands Lead Role in Major Film Franchise',
    author: 'Tuyen Nguyen',
    description:
      'There are other placeholder text alternatives like Hipster Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. While often hilarious, these placeholder passages can also lead to much of the same confusion.',
    publishedAt: '03 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/6800202/pexels-photo-6800202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 14,
    title: 'Controversial Pop Star Under Fire for Latest Music Video',
    author: 'Lily Patel',
    description:
      'Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!',
    publishedAt: '12 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/7502191/pexels-photo-7502191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 15,
    title: 'Iconic Music Festival Announces 2023 Lineup',
    author: 'Dylan Rodriguez',
    description:
      'Sometimes it’s nice to put in text just to get an idea of how text will fill in a space on your website.',
    publishedAt: '15 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 16,
    title: 'Comedy Legend to Receive Lifetime Achievement Award',
    author: 'Yi Chen',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '03 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/7005636/pexels-photo-7005636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 17,
    title: 'Celebrity Couple Announces Engagement on Social Media',
    author: 'Shinichi Tanaka',
    description:
      'There are other placeholder text alternatives like Hipster Ipsum, Zombie Ipsum, Bacon Ipsum, and many more. While often hilarious, these placeholder passages can also lead to much of the same confusion.',
    publishedAt: '21 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/58572/pexels-photo-58572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 18,
    title: 'Box Office Hit Becomes Fastest Film to Reach Billion-Dollar Mark',
    author: 'Avery James',
    description:
      'Traditionally our industry has used Lorem Ipsum, which is placeholder text written in Latin. Unfortunately, not everyone is familiar with Lorem Ipsum and that can lead to confusion. I can’t tell you how many times clients have asked me why their website is in another language!',
    publishedAt: '10 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 19,
    title: 'Pop Culture Phenomenon Gets Its Own Museum Exhibit',
    author: 'Justin Tan',
    description:
      'Sometimes it’s nice to put in text just to get an idea of how text will fill in a space on your website.',
    publishedAt: '03 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 20,
    title: 'Broadway Musical Revival Wins Multiple Tony Awards',
    author: 'Sujin Lee',
    description:
      'This is just placeholder text. Don’t be alarmed, this is just here to fill up space since your finalized copy isn’t ready yet. Once we have your content finalized, we’ll replace this placeholder text with your real content.',
    publishedAt: '03 Apr 2100',
    urlToImage:
      'https://images.pexels.com/photos/6896181/pexels-photo-6896181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export default data;