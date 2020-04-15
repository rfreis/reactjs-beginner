import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import MemoComp from './components/MemoComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/userContext';
// import PostList from './components/PostList';
import PostForm from './components/PostForm';



function App() {
  return (
    <div className="App">
    <PostForm />
    {/*     <Message />
      <PostList />
      <UserProvider value="Rodrigo">
      <ComponentC />
      </UserProvider>
      <CounterTwo render={(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount} />
    ) } />
    <CounterTwo render={(count, incrementCount) => (
    <ClickCounterTwo count={count} incrementCount={incrementCount} />
  ) } />
  <CounterThree>
  {(count, incrementCount) => (
  <ClickCounterTwo count={count} incrementCount={incrementCount} />
)}
</CounterThree>
      <User name={ (isLoggedIn) => isLoggedIn ? 'Rodrigo Function' : 'Guest' } />
      <HoverCounterTwo />
      <ClickCounterTwo />
      <ClickCounter name='Rodrigo' />
      <HoverCounter />

      <ErrorBoundary>
      <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary>

      <PortalDemo />
      <FRParentInput />
      <FocusInput />
      <RefsDemo />
      <ParentComp/>
      <MemoComp />
      <PureComp/>
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={false} />
      <Stylesheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
    <ClassClick />
    <Counter />
    <Greet name="Bruce" heroName="Batman">
    <p>This is children</p>
    </Greet>
    <Greet name="Diana" heroName="Wonderwoman" />
    <Greet name="Clark" heroName="Superman" />
    <Welcome name="Bruce" heroName="Batman" />
    <Welcome name="Diana" heroName="Wonderwoman" />}
    <Hello /> */}
    </div>
  );
}

export default App;
