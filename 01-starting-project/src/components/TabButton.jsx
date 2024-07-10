// export default function TabButton(props) {
//   return (
//     <>
//       <li>
//         <button>{props.children}</button>
//       </li>
//     </>
//   );
// }

// When we don't pass any attributes to custom component, our custom component in react will still recieve the props object.
// It will be pretty empty, but not fully empty
// Instead there is one props that we will always get and i.e., the special built-in children prop
//Children props: prop set by react, that's not set with the help of any attributes
// 2. The children prop will refer to the text between your custom component

// We can also desrtructure the children from the prop directly and use it
export default function TabButton({ children, onSelect }) {
  //   function clickHandler() {
  //     console.log("Hello World");
  //   }
  console.log("TabButton component being executed");

  return (
    <>
      <li>
        {/* <button onClick={clickHandler}>{children}</button> */}
        <button onClick={onSelect}> {children} </button>
      </li>
    </>
  );
}

// the value for any event prop (e.g., onClick()) is a function
// should not add paranthesis to function called in event prop, coz we want to use the function as a value
// So basically, if you add paranthesis to a function, it means it is getting executed by you
// but in event props, we want to get the function executed by react, that's why we don't use paranthesis
