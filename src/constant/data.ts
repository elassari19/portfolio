import { TiHtml5,TiCss3 } from 'react-icons/ti'
import { FaSass, FaReact } from 'react-icons/fa'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'
import { ReactNode } from 'react'
import { Link } from '../components';

interface Itechnology {
  Logo: ReactNode;
  name: string;
}

export interface IProject {
  title: string;
  technology: Itechnology[];
  url: string;
  imgae: string;
  code: string;
  id: string;
}

const workData = [
  {
    title: 'Hotel Reservations',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo: FaSass, name: 'Sass'}],
    url: 'https://elassari19.github.io/reservation/',
    image: '/reservation.bmp',
    code: 'https://github.com/elassari19/reservation',
    id: 'data0'
  },
  {
    title: 'Github User Info',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/github-user-info/#/',
    image: '/github.bmp',
    code: 'https://github.com/elassari19/github-user-info',
    id: 'data1'
  },
  {
    title: 'E-commerce',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/e_commerce/',
    image: '/ecommerce.bmp',
    code: 'https://github.com/elassari19/e_commerce',
    id: 'data2'
  },
  {
    title: 'CRUD App',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/crud/',
    image: '/crud.bmp',
    code: 'https://github.com/elassari19/crud',
    id: 'data3'
  },
  {
    title: 'Books Shopping Cart',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/shopping_card/',
    image: '/books.bmp',
    code: 'https://github.com/elassari19/shopping_card',
    id: 'data4'
  },
  {
    title: 'Memory Game',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo: TiCss3, name: 'CSS3'}],
    url: 'https://elassari19.github.io/react_memory_game/',
    image: '/game.bmp',
    code: 'https://github.com/elassari19/react_memory_game',
    id: 'data5'
  },
  {
    title: 'Book Library',
    technology: [{Logo: TiHtml5, name: 'HTML5'},{Logo: TiCss3, name: 'CSS3'},{Logo: SiJavascript, name: 'Javascript'}],
    url: 'https://elassari19.github.io/bookLibrary/',
    image: '/book.bmp',
    code: 'https://github.com/elassari19/bookLibrary',
    id: 'data6'
  },
];


const articleData = [
  [
    {tag: 'h1', str: `The React Roadmap to Success`},
    {tag: 'p', str: `React is one of the most popular JavaScript frameworks currently in use, and even if you are not using it yourself, you are no doubt at least reasonably familiar with its existence. Used primarily for the development of Single Page Applications (SPA), React is an open-source library used for web development. A lot of extra development has been done to augment the basic React offering, and the eco-system is quite large. There are many tutorials, sites and other resources that will take you from the basic elements to advanced topics for React. In fact, there are so many resources and new developments available that it can be difficult to keep track of them all. Fortunately, we've assembled a set of resources and key information about React that will be useful for beginners and experienced developers alike. Enjoy!`},
  ],
  [
    {tag: 'h1', str: `Table of Contents`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `1.React Hot Topics`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `2.What is React?`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `3.Where Did React Come From?`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `4.What's the Latest and Greatest with React?`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `5.Is React the Right Choice for My App?`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `6.Sounds Great! Now What Do I Do?`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `7.Creating the User Experience`},
    {tag: Link, href: '/articles', style: {display: 'block'}, str: `8.Resources for Staying Current with React`},
  ],
  [
    {tag: 'h2', str: `1. React Hot Topics`},
    {tag: 'p', str: `The latest and greatest, hot off the presses news about React. We've started off with a quick look at some topics that are trending today and are of particular interest to the React community. Be sure to check back here often. Web development is a fast-paced environment and what's new and hot can change frequently. Here we list some key hot topics for today but we'll update this as needed!`},
    {tag: 'h3', str: `Render Props`},
    {tag: 'p', str: `When using components in React you are able to re-use your code, but it may not be clear how to share data between these components. A render prop is basically a prop whose value is a function, and which allows you to share code between components. A component with a render function will call a render prop, which takes a function that returns a React element. Then the component uses this instead of using its own render logic. The React Router and Downshift libraries both use render props. Looking at the React documentation you can see a great code example of using render props on a component to dynamically decide what to render. Here is a snippet of what that looks like:`},
    {
      tag: 'pre',
      children: [
        {tag: 'span', style: {display: 'block'}, str: `class MouseTracker extends React.Component {`},
        {tag: 'span', style: {display: 'block'}, str: `  render() {`},
        {tag: 'span', style: {display: 'block'}, str: `    return (`},
        {tag: 'span', style: {display: 'block'}, str: `      <div>`},
        {tag: 'span', style: {display: 'block'}, str: `        <h1>Move the mouse around!</h1>`},
        {tag: 'span', style: {display: 'block'}, str: `        <Mouse render={mouse => (`},
        {tag: 'span', style: {display: 'block'}, str: `          <Cat mouse={mouse} />`},
        {tag: 'span', style: {display: 'block'}, str: `        )}/>`},
        {tag: 'span', style: {display: 'block'}, str: `      </div>`},
        {tag: 'span', style: {display: 'block'}, str: `    );`},
        {tag: 'span', style: {display: 'block'}, str: `  }`},
        {tag: 'span', style: {display: 'block'}, str: `}`},
      ]
    },
    {tag: 'p', str: `You do not have to use a prop specifically called "render". Basically, any function that tells a component what to render will be considered a render prop. Be aware that when you use render props inside of a React.PureComponent the shallow prop comparison will return false for new props, which means that each render will generate a new value for your render prop.`},
    {tag: 'h3', str: `Context API`},
    {tag: 'p', str: `Passing data between components is a common hurdle when using components in any framework. One of React's solutions to this is to take advantage of the Context API. Usually one would need to pass data top-down from parent components to children components. The larger and more nested your components become, the more complicated this will be. Using createContext you can pass a value deep into the component tree without having to explicitly drill down through the components. React documentation advises users to only use this approach when you need the same data accessed in many components at multiple levels. When taking advantage of the Context API you'll first use a Provider and a Consumer:`},
    {
      tag: 'pre',
      children: [
        {tag: 'span', style: {display: 'block'}, str: `React.createContext(`},
        {tag: 'span', style: {display: 'block'}, str: `  const { Provider, Consumer } = React.createContext(defaultValue);`},
        {tag: 'span', style: {display: 'block'}, str: `);`},
      ]
    },
    {tag: 'h3', str: 'Async Rendering & Suspense'},
    {tag: 'p', str: `In a tldr; version, React's new Suspense feature gives you the power to delay rendering a part of your application until a certain condition is met, With the ability to show another component like a loading spinner until the content is ready. This was introduced by Dan Abramov from the JSConf.is stage with a warning that the API will change but that it was using a real build of React. Along with suspending rendering, in order to give users a better experience regardless of their computing speed or network connection, React now has a way to make updates more asynchronous. With the new API React can start rendering but hit the server to see if there is a higher priority event that it should handle first. As Dan describes it, they've, ???built a generic way to ensure that high-priority updates like user input don't get blocked by rendering low-priority updates.??? To see this all in action check out Dan's demos from the talk listed above.`},
    {tag: 'h3', str: `CSS-in-JS`},
    {tag: 'p', str: `CSS-in-JS sounds just like what it is - instead of creating separate files for styling, the CSS is placed inside the JS files of the component. Writing CSS inside of your JS files may feel wrong and against your usual clean code standards, but some think this is beneficial as it helps keep everything you need for a component in one place. Actual CSS is generated when you use CSS-in-JS libraries and some even add support for non-native CSS features like nesting. Using this approach lets you stay in the context of your components, add isolation, scoped selectors, vendor prefixing, unit tests and more. Here are some of the most popular CSS-in-JS libraries: Styled Components, JSS-React, glamourous, Aphrodite and Styletron.`},
    {tag: 'h3', str: `Progressive Web Apps`},
    {tag: 'p', str: `Progressive Web Apps (PWAs) represent a new way to approach web development, especially for responsive and mobile web apps. By following a few new web APIs and a number of development practices and guidelines, PWAs are intended to allow developers to build mobile web apps that behave a lot more like natively-installed applications.`},
    {tag: 'p', str: `Why does this matter? Because, in reality, people primarily use native apps, not web apps, on their phones. According to comScore, people spend 87% of their on-device time in native apps, and only 13% on the mobile web.`},
    {tag: 'p', str: `And while we can't completely generalize why this is, native apps have a number of built-in advantages that make users more likely to engage with them over a mobile web experience, including home screen launch icons, push notifications, offline support and better performance. Generally speaking, in the eyes of consumers, native apps are more dependable.`},
    {tag: 'p', str: `But the other side of this coin is that native app usage is highly concentrated among a few apps, for most consumers. Many studies have found that users tend to use only a few installed apps on a regular basis, and all that time and money you are looking to spend to create a fully-native app that mimics what your web app already does might be a waste if you're not immensely sticky.`},
    {tag: 'p', str: `Thankfully, PWAs exist to make it easier for web developers to create mobile web apps that have many of the advantages of native apps, including installability and offline support, without having to creative a fully-native mobile app.`},
    {tag: 'p', str: `In practice, PWAs center around a new level of care for the experiences your users have while using your app. According to Google, one of the primary drivers of PWAs, PWAs are all about delivering user experiences that are reliable, fast and engaging. They are experiences that have the reach of the web, and which:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `Load instantly and never become nonfunctional, even in uncertain network conditions`},
      {tag: 'li', str: `Respond quickly to user interactions with smooth, fluid animations and no jankiness`},
      {tag: 'li', str: `Feel like a native app on the device, and provide an immersive experience`},
    ]},
    {tag: 'p', str: `For more info on PWAs, check out Google's Progressive Web Apps. For more guidance on building a PWA, or adapting an existing app to the PWA model, you can follow this checklist from Google.`},
    {tag: 'p', str: `There are some good resources available to help take you through the process of creating a PWA, and you can find a great tutorial series here, complete with code samples you can download. You'll also need a UI for your PWA, and what better than Kendo UI with support for PWAs! For more detailed information on how to create a PWA with React and Kendo UI, you can read this GIF guide.`},
    {tag: 'h3', str: `Service Workers`},
    {tag: 'p', str: `One of the key technologies in the PWA umbrella is Service Workers. A Service Worker is essentially a programmable network proxy inside the browser, which allows you to "catch" when the browser needs to make a network request and either dispatch the request, or retrieve the requested information from a cache or local store. What this means is that Service Workers enable developers to deliver an offline capable experience by being able to detect and respond to offline or high-latency conditions in an app. For an in-depth introduction to Service Workers, check out this article from Matt Gaunt at Google.`},
    {tag: 'p', str: `Service Workers have support in Chrome and Firefox, Safari and Edge but not Internet Explorer. With Safari/iOS Safari, Edge and Chrome and Firefox for Android all getting support recently.`},
    {tag: 'h3', str: `Redux`},
    {tag: 'p', str: `React is great at rendering out components and boosting performance, but it lacks any formal pattern around state and data retrieval which can make data management complicated and can quickly lead to code bloat. This is where Redux comes in. Redux is a predictable state container for JavaScript apps. It is often used with React, although you can use it with any other view library as well. It helps you write applications that behave consistently and are easy to test. Redux also provides a great developer experience, including live code editing and a time traveling debugger that does not require a Tardis.`},
    {tag: 'p', str: `Redux's architecture is built around unidirectional data flow, which pairs nicely with React's rendering pattern. Since the data flow is one direction, we don't have to worry about side effects and can trust that the component will render or re-render with predictability.`},
    {tag: 'p', children: [
        {tag: 'span', str: `To learn more about how and when to use Redux with React, check out this article on `},
        {tag: Link, style: {textDecoration: 'none', color: '#00fe', fontWeight: 'bold'}, href: 'https://www.telerik.com/blogs/control-your-frontend-data-before-it-controls-you-when-to-implement-redux-in-your-react-app', str: `implementing Redux in your React app`},
        {tag: 'span', str: `, we also have another article on`},
        {tag: Link, style: {textDecoration: 'none', color: '#00fe', fontWeight: 'bold'}, href: 'https://www.telerik.com/blogs/3-essential-tips-for-managing-state-in-react-applications', str: ` 3 tips for state management in React `},
        {tag: 'span', str: `, or take a look at the resources on the`},
        {tag: Link, style: {textDecoration: 'none', color: '#00fe', fontWeight: 'bold'}, href: 'https://redux.js.org/', str: ` Redux web site. `},
      ]
    }
  ],
  [
    {tag: 'h2', str: `2. What is React?`},
    {tag: 'p', str: `React is very popular in the web development world, and unless you've been living in a cave on a remote island you can't possibly have missed hearing about it. Let's take a quick look at React, it's history, and the core concepts in React.`},
    {tag: 'p', str: `React was created originally at Facebook and, other than brief bump in the road in 2017 over licensing terms, has enjoyed solid growth since its introduction. Depending on which statistics you look at, React can actually be called the most popular JavaScript framework today. What are the key features of React? These include:`},
    {tag: 'ol', children: [
      {tag: 'li', str: 'Virtual DOM'},
      {tag: 'li', str: 'JSX'},
      {tag: 'li', str: 'Components'},
      {tag: 'li', str: 'Props'},
      {tag: 'li', str: 'State'},
      {tag: 'li', str: 'Lifecycle'},
    ]},
    {tag: 'h3', str: `Virtual DOM`},
    {tag: 'p', str: `We'll spend a bit of time here because this is a very important concept. Like the actual DOM (Document Object Model), the React Virtual DOM is a node tree, except that it's virtual ??? it doesn't directly display. The virtual DOM also contains a list of elements, content and attributes that are represented by JavaScript objects that have a variety of properties.`},
    {tag: 'p', str: `Each React component has a render function, and when we call that render function a node tree is created from that particular React component. This might be a single component, or it could be rendering child components as well. Whatever it includes, the whole tree is listed out. This same tree is also updated when data models in the components change. This includes state updates or any other data in the components.`},
    {tag: 'p', str: `That's the virtual DOM. Now let's dive into the how the real DOM gets updated. There are three steps involved in updates. First of all, whenever something changes in a component tree, the virtual DOM will be updated and re-rendered. After the virtual DOM has been updated, the difference can be determined between the new virtual DOM and the old virtual DOM, so we know what has actually changed. The next step is to update the real DOM with the list of changes that were derived from the virtual DOM changes.`},
    {tag: 'p', str: `This is a big deal because updating the real DOM can be very expensive in time and resources. In this way we are performing all of our changes one by one on the virtual DOM first, and the final changes are brought over to the real (and expensive) DOM only once at the end.`},
    {tag: 'h3', str: `JSX`},
    {tag: 'p', str: `JSX is the blending of a bit of JavaScript with a bit of HTML ??? really an extension to JavaScript. It let's you streamline your code by mixing the two when appropriate and is used by React.createElement to produce React elements in a more efficient way.`},
    {tag: 'h3', str: `Components`},
    {tag: 'p', str: `One of the key concepts in both React and other frameworks is the component. To get a sense of how the components vary between frameworks, you can read this comparison of components in different frameworks for more information.`},
    {tag: 'p', str: `The basic concept behind components is that they are much like JavaScript functions, and they let you break the UI into reusable, independent pieces. Each component has a basic structure that includes some set of inputs and a set of props, and then it returns React elements. The components will always return a render function that includes the elements we want it to display. Components are very basic at their base but they can get very complex if needed. Every component has a render function and that is a key element for each component in React.`},
    {tag: 'h3', str: `Props`},
    {tag: 'p', str: `Attributes and components get their overall properties from props. That's how we deal with different attributes and how we pass data into a component. When we pass a prop in by name we can then easily use it while rendering a particular component by using this.props.name.`},
    {tag: 'h3', str: `Lifecycle`},
    {tag: 'p', str: `React gives us a complete set of lifecycle hooks that we can subscribe to and use to control each component. These include functions for mounting, unmounting and updating. They let us have complete control over the lifecycle of each individual component. For example, the constructor can be used to set up an initial state for a component, and then after that we can use other events that we can connect to.`},
    {tag: 'h3', str: `State`},
    {tag: 'p', str: `Last but not least, components each have a state that they manage as well. The state can be extracted from the component and set in the component. Updating and dealing with the component state is the responsibility of the developer.`},
  ],
  [
    {tag: 'h2', str: `3. Where Did React Come From?`},
    {tag: 'p', str: `Like Angular and Vue, React is a popular JavaScript framework. These frameworks are designed to make life easier for developers when they are creating apps. React includes a number of features that help with aspects of typical modern app development and help make complex tasks easier. In the end, by using React you can be more productive and even create a better user experience because the development of complex features will be easier.`},
    {tag: 'p', str: `The first idea for React was a need to replace XHP (an HTML component framework for PHP being used at Facebook), and Facebook engineer Jordan Walke came up with a precursor to React called FaxJs which has been preserved on Github for historical context. Today, React is still driven by Facebook although there is an active open source community. He was inspired by XHP, which is a PHP-based system, as well other sources. Peter Hunt wanted to use React at Instagram and helped to create a more neutral (non-Facebook) version. Facebook added resources to the development team and decided to open-source the project.`},
    {tag: 'p', str: `It was released as open source at the JSConf in May 2013. Version 3 was released in July of 2013, version 12 in November of 2014, version 14 in October 2015, version 15 in April 2016, version 16 in September 2017. You may notice I skipped a few releases in my list because I only listed one major release per year, and you can see that it moved fairly quickly in the beginning as major new features were added. As the product matured, the pace of major releases slowed as is expected with a more stable open source project.`},
    {tag: 'p', str: `React does not try to be a complete application framework, and some people will argue whether it is properly a ???framework??? (we think it is). React is focused on helping to build the user interface.`},
    {tag: 'p', str: `It is worth mentioning that React had its share of controversy. The initial public release used a standard Apache 2.0 license. In 2014, Facebook replaced this with a 3-clause BSD license coupled with a separate patents clause. There was much discussion about whether this actually gave Facebook an unacceptable amount of control. In response to user concern, Facebook changed the patent clause in 2015 to be more clear and permissive. However, Apache considered this incompatible with their licensing and controversy continued. Facebook refused to reconsider and projects from several high-profile companies, like Wordpress, announced that they were moving away from React. In September 2017 Facebook announced that they would move to an MIT license to meet user's concerns. React version 16 was released at the end of September 2017 under the MIT license.`},
    {tag: 'p', children: [
      {tag: 'span', str: 'Today, over 1,000 people are listed as React authors on the '},
      {tag: Link, str: 'Github React pages'}
    ]},
  ],
  [
    {tag: 'h2', str: `4. What's the Latest and Greatest with React?`},
    {tag: 'p', str: `The Facebook team has definitely been busy these past few months with the minor release, 16.4.0, it's follow-up patch, 16.4.1. We'll walk through a few things that came from this release including Pointer Events, the next steps towards asynchronous programming, and more. You can keep up-to-date with all React's releases on their GitHub repo's releases page.`},
    {tag: 'h3', str: `Pointer Events`},
    {tag: 'p', str: `In order to keep track of users' interaction with the page, we have to now go beyond just mouse input. This is because people are browsing apps on more devices with more inputs whether it's using a stylus on a tablet or their thumbs on a cell phone. To track all these inputs we now have have Pointer Events which inherit mouse events and add the ability to listen to touch and stylus interactions as well. Here is the list of events available as of the React 16.4.0 release:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `onPointerDown`},
      {tag: 'li', str: `onPointerMove`},
      {tag: 'li', str: `onPointerUp`},
      {tag: 'li', str: `onPointerCancel`},
      {tag: 'li', str: `onGotPointerCapture`},
      {tag: 'li', str: `onLostPointerCapture`},
      {tag: 'li', str: `onPointerEnter`},
      {tag: 'li', str: `onPointerLeave`},
      {tag: 'li', str: `onPointerOver`},
      {tag: 'li', str: `onPointerOut`},
    ]},
    {tag: 'abbr', str: `Note: the events only work where browsers support Pointer Events specification.`},
    {tag: 'h4', str: `Next steps for getDerviedStateFromProps`},
    {tag: 'p', str: `In the recent releases, the React team has been making strides toward more asynchronous coding in React. Unfortunately, they also noticed developers making coding decisions that lead to unsafe practices and anti-patterns. The first step was to deem componentWillMount, componentWIllUpdate, and componentWillReceiveProps as UNSAFE_ by literally adding that to their names. Then they brought in one of the first replacements: getDerivedStateFrom Props. In the latest minor release the team included a bugfix for getDerivedStateFromProps that made some existing bugs in React components apparent and more consistent, especially if your app was using an anti-pattern. The team is still in the process of making improvements so stay tuned.`},
    {tag: 'h2', str: `Fixes and Experimentals`},
    {tag: 'p', str: `The latest two releases also provided many fixes. You can see all of them listed in our blog post covering theses last two releases in detail: New Features and Fixes We Got with the Latest React Releases. There was also a new experimental component that was released in 16.4.0, Profiler. With this new component from Brian Vaughn you can collect new time metrics. Right now most of the new functionality is behind a flag, enableProfileModeMetrics so without enabling it your component will render its children normally. When enabled this component will collect timing information and pass it to the onRender function.`},
    {tag: 'p', children: [
      {tag: 'span', str: `The React team is keeping a steady stream of releases going so check-in at their release page or check-in here for a comprehensive overview. Update: The React team just announced the latest 16.6 release Check out the `},
      {tag: Link, str: `blog article.`},
    ]},
  ],
  [
    {tag: 'h2', str: `5. Is React the Right Choice for My App?`},
    {tag: 'p', str: `To be fair, there are different frameworks because they solve different problems in different ways. Part of the reason to select one framework over another involves environment, experience and preference. But there are very real differences that can make one more or less appropriate depending on your specific objectives. There are a number of reasons to pick React, including these top 5 reasons. But ultimately, there are some questions you need to consider:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `Is React still popular?`},
      {tag: 'li', str: `React? Angular? Vue?`},
      {tag: 'li', str: `What are the long-term prospects for React?`},
    ]},
    {tag: 'p', str: `Let's take a quick look at these issues.`},
    {tag: 'h3', str: `Is React Still Popular?`},
    {tag: 'p', str: `Technologies come and go rapidly in the JavaScript world. What is hot this year might be forgotten next year, and new technologies showing up to take their place. If we want to adopt any new technology, we want to make sure that it will be around for a while and will enjoy support. So where does React fit in to the lifecycle of new technology? First of all, there is a very active development effort around React and a clear roadmap. If we look at all the available statistics, we also see that React is still growing rapidly. The 2017 State of JavaScript and 2018 StackOverflow Developer Survey Results, for example, clearly show tthat React is here to stay.`},
    {tag: 'h3', str: `React? Angular? Vue?`},
    {tag: 'p', str: `If you are looking at React, you are probably considering how React stacks up against the other frameworks currently in wide use. Specifically, that means looking at Angular and Vue. The information on this page is mainly focused on React but it is worth taking a moment to peek at Angular and Vue and see how they compare to React for your application. These last few words are important: for your application. One is not better or worse than the others, but they are different and these differences might make them better or worse for a specific environment and specific application. There are a number of factors to consider when making this choice.`},
    {tag: 'p', str: `Perhaps even more importantly, you need to look at these factors as they apply within your own organization. What skills does your team have? What future requirements will you need to consider? What will the long-term disposition of this app be? Will you need to share code with other teams in the future? Practical considerations can often outweigh technical concerns. Having said that, here are a few things to think about when you are deciding on a framework:`},
    {tag: 'h3', str: `The Move to Single Page Applications (SPA)`},
    {tag: 'p', str: `Another popular buzzword for web apps is the Single Page Application (SPA). This is, of course, exactly what it says. An application that consists of a single page - a single URL. So why is that anything worth talking about? It really comes along with web applications becoming more complex and more modular in their structure. At some point, it's easier to reload parts of the page than to load a whole new page, read in the date again, initialize things, etc. So you initialize your environment once, and then just swap parts of the page in and out to change the function of the page. Faster, easier, slimmer. Some users hate them though ??? no URLs to bookmark. And that's something to think about.`},
    {tag: 'p', str: `Why am I even mentioning this here? If you are looking at React, you are working with a web app of reasonable complexity. If your app is still spread out across multiple pages, consider bringing it all into a single page instead. You'll save in setup overhead which will translate into faster load and response times for your users. Conversely, if you are starting on a single page app, consider whether your users would actually benefit from multiple pages (and multiple bookmark-able URLs). Also ??? consider whether your SEO team would be happier with multiple pages as well. Maybe not if you are just displaying data records pulled from a database, or if you are behind a firewall and Google can't see you anyway. What's right and wrong depends on your unique situation, but make sure you do or don't move to an SPA based on the right reasons.`},
    {tag: 'h3', str: `How Does React Relate to Functional Programming?`},
    {tag: 'p', str: `React is a framework that incorporates ideas from the functional programming style. Some of these concepts include proper handling of state change, composition over inheritance, and using array iterator methods. Using the functional approach to write a React app doesn't just apply to React components. Business logic can benefit from functional programming as well since it encourages declarative expressions vs imperative methods.`},
    {tag: 'p', str: `If developing with React has raised your interest in functional programming, there are resources available for learning more. In ???Building a Visual Unit Test for React???, combining StackBlitz, React, and Kendo UI is used to create a coding challenge for learning functional programming with JavaScript. The Visual Unit Test project uses visual elements and unit testing to "gamify" the learning process. In addition, a functional programming cheat sheet is available to help you along the way whether you're doing the coding challenge or just use it for casual reference.`},
  ],
  [
    {tag: 'h3', str: `6. Sounds Great! Now What Do I Do?`},
    {tag: 'p', str: `You've picked React as the framework for your next project. Great! But life is more complicated than just coding and you should really step back first and consider your development environment along with some of the key decisions you need make as you plan out your React app. A little planning up front will save you a lot of work later.`},
    {tag: 'p', str: `Things you should consider first include:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `Your software development tools, including bug trackers, version control, communication and task management`},
      {tag: 'li', str: `Package managers, or tools that help track and manage dependencies from external sources`},
      {tag: 'li', str: `Task runners to help you automate things like testing, linting and more`},
      {tag: 'li', str: `Linters and style checkers, to maintain consistency throughout your team`},
      {tag: 'li', str: `UI components like Material, Bootstrap and Kendo UI`},
      {tag: 'li', str: `Testing tools for units of code and even end-to-end browser testing`},
      {tag: 'li', str: `Your targets and distribution strategy - are you building a mobile app, a PWA?`},
      {tag: 'li', str: `Style guides, state management and performance`},
    ]},

    {tag: 'p', str: `Once you have considered these factors and more, you're ready to roll with React. Thankfully, there's a great tutorial and some awesome docs on the React web site itself.`},
    {tag: 'p', str: `Want to take a deeper dive into some specific topics? Here is a blog that looks at the top 3 tips to managing state in React, and one on the top 3 performance tips for using React.`},
    {tag: 'h4', str: `Quick React Apps with create-react-app`},
    {tag: 'p', str: `The create-react-app library from the Facebook team helps you build up React applications with no build configurations. There is definitely a lot you can learn from building your React apps from the ground up but once you feel comfortable create-react-app takes care of the tedious work for you. Not to discourage beginners from using this scaffolding tool, just know there is a lot going on under the hood. You can learn a lot from breaking a project built with create-react-app too ;). Okay, let's dig in.`},
    {tag: 'h5', str: `Building a Project`},
    {tag: 'pre', children: [
      {tag: 'span', style: {display: 'block'}, str: `npx create-react-app cool-new-app`},
      {tag: 'span', style: {display: 'block'}, str: `cd cool-new-app`},
      {tag: 'span', style: {display: 'block'}, str: `npm start`},
    ]},
    {tag: 'p', str: `npx is a tool offered in npm@5.2.0 that installs a temporary package and calls it.`},
    {tag: 'p', str: `You can also install create-react-app globally to use at your leisure. Once you create a project this is what the project's file structure will look like:`},
    {tag: 'pre', children: [
      {tag: 'h6', style: {dispaly: 'block'}, str: `my-app`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? README.md`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? node_modules`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? package.json`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? .gitignore`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? public`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `???   ????????? favicon.ico`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `???   ????????? index.html`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `???   ????????? manifest.json`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `????????? src`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? App.css`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? App.js`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? App.test.js`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? index.css`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? index.js`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? logo.svg`},
      {tag: 'h6', style: {dispaly: 'block'}, str: `    ????????? serviceWorker.js`},
    ]},
    {tag: 'p', str: `When you run npm start or yarn start you can then preview your project at http://localhost:3000. As you make changes to your app the page will reload when you save. You will also be able to see build errors and lint warnings in your console where you launched the app.`},
    {tag: 'h4', str: `But Wait There's More!`},
    {tag: 'p', str: `There are many other goodies you get with create-react-app like testing and a build script. Although setup is as simple as those three lines of code there is a lot to it, so check out the handy User Guide for more info.`},
    {tag: 'p', str: `One of my favorite extras are the two files that give you Progressive Web App support. PWAs they are basically a way to use modern web technologies like a Web App Manifest, Service Worker API and Push API to help make your web apps more accessible, reliable and engaging. You can read more information by checking out this Progressive Web Apps blog series.`},
    {tag: 'p', str: `When you use create-react-app you get two PWA pieces:`},
    {tag: 'p', str: `The manifest.json gives the browser information on how to display your application. This includes things like "display": "standalone" which tells the browser to show the app fullscreen by removing the browser chrome. It also sets you up to add a short_name and icons to control how your app is displayed on a user's device if they opt to install your application. Here is what the default manifest.json file looks like:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `the manifest.json file in the public directory`},
      {tag: 'li', str: `a Service Worker file, serviceWorker.js in the src directory`},
    ]},
  ],
  [
    {tag: 'h2', str: `7. Creating the User Experience`},
    {tag: 'p', str: `Today, your web apps form the face of your business and are not simply a tool anymore. That means that just providing basic functionality is not enough, you need to provide an outstanding user experience. There are some basic tools that can help you get there, like Bootstrap and Material, but modern apps need far more functionality that these can provide. Fortunately, we have KendoReact.`},
    {tag: 'h3', str: `Using Kendo UI to Build Your User Interface`},
    {tag: 'p', str: `Whether you've decided to use Material, Bootstrap or another UI library, chances are that your UI and functional needs extend beyond the built-in HTML components. Instead of building your own components, or cobbling them together from an uncoordinated mess of single-feature libraries and components, the faster approach is to use a robust library of UI components. Kendo UI provides the most popular UI library of native and purpose-built UI components, and is worth considering for your next app. Here are a few of the stellar features of KendoReact:`},
    {tag: 'ul', children: [
      {tag: 'li', str: `Performance and Speed: the components are engineered specifically for React, and built from the ground-up for React. This enables them to take full advantage of the framework's native performance capabilities.`},
      {tag: 'li', str: `Installation and Updates: KendoReact is installed as discrete, scoped npm packages. It is easy and unobtrusive to get the latest bits: no need for time-consuming installations. This also means that the latest code is always available immediately.`},
      {tag: 'li', str: `We've been doing this for a long time. Progress has been creating UI components for 15 years. Kendo UI has been used in tons of apps so you get all this experience and user feedback folded into the KendoReact components.`},
    ]},
    {tag: 'p', str: `For more details check out this video tutorial on getting started with KendoReact and download a free trial.`},
  ],
  [
    {tag: 'h2', str: `8. Resources for Staying Current with React`},
    {tag: 'p', str: `Web technology is a fast-paced environment and it is important to stay on top of new developments and changes. In addition to the information provided on these pages, we have included a list of other resources you can use to stay on top.`},
    {tag: 'ul', children: [
      {tag: 'li', str: `The React Homepage, of course`},
      {tag: 'li', str: `The React Blog`},
      {tag: 'li', str: `React on Twitter`},
      {tag: 'li', str: `A list of other React Resources`},
      {tag: 'li', str: `Upcoming Events where the focus is on React, and local Meetups for React`},
    ]},
    {tag: 'p', str: `And, of course, you can keep an eye on what people are saying about React. Here are a few suggestions (some of the React team members) for who to follow on Twitter, and there are lots of other people who are contributors to the React community that you will find:`},
    {tag: 'ul', children: [
          {tag: Link, str: `@dan_abramov`, href: 'https://twitter.com/dan_abramov'},
          {tag: Link, str: `@zpao`, href: 'https://twitter.com/zpao'},
          {tag: Link, str: `@amasad`, href: 'https://twitter.com/amasad'},
          {tag: Link, str: `@jingc`, href: 'https://twitter.com/jingc'},
          {tag: Link, str: `@fisherwebdev`, href: 'https://twitter.com/fisherwebdev'},
          {tag: Link, str: ` @tomocchino`, href: 'https://twitter.com/'},

    ]},
  ],
  [
    {tag: 'h2', str: `Authors`},
    {tag: 'p', str: `Thank you for reading our React resource created by John Willoughby, Tara Z. Manicsic and Ed Charbeneau. We hope you have found it useful. Questions or comments? Leave a comment below ??? we love to hear from you!`}
  ]
]


export {
  workData,
  articleData
}