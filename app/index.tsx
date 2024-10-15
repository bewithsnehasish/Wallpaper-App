import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View>
      <Text>Hello World</Text>
      <Button title="Sign Up"></Button>
    </View>
  );
}
