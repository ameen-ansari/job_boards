import { useState } from "react";
import AuthBookMark from "./AuthBookMark";
import GuestBookMark from "./GuestBookMark";

const BookMark = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  if (isSignedIn) {
    return <AuthBookMark />;
  } else {
    return <GuestBookMark />;
  }
};

export default BookMark;
