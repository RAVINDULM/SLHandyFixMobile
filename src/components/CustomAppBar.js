// // react native paper app bar
// import { Appbar } from "react-native-paper";

// function CustomNavigationBar({ navigation, back }) {
//     const [visible, setVisible] = React.useState(false);
//     const openMenu = () => setVisible(true);
//     const closeMenu = () => setVisible(false);

//     return (
//       <Appbar.Header>
//         {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
//         <Appbar.Content title="My awesome app" />
//         {!back ? (
//           <Menu
//             visible={visible}
//             onDismiss={closeMenu}
//             anchor={
//               <Appbar.Action icon="menu" color="white" onPress={openMenu} />
//             }>
//             <Menu.Item onPress={() => {console.log('Option 1 was pressed')}} title="Option 1" />
//             <Menu.Item onPress={() => {console.log('Option 2 was pressed')}} title="Option 2" />
//             <Menu.Item onPress={() => {console.log('Option 3 was pressed')}} title="Option 3" disabled />
//           </Menu>
//         ) : null}
//       </Appbar.Header>
//     );
//   }
