import {View} from "react-native";
import {Image} from "react-native-expo-image-cache";


export default function ImageCaching({ path }: { path: string }) {
  // preview can be a local image or a data uri
  const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
  const uri = path;

  return (
    <View>
      <Image style={{
        height:80,
        width: 80 ,
        borderRadius: 4
      }} {...{preview, uri}} />
    </View>
  );
}


