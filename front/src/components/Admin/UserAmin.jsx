import { StyleSheet, Text, View, FlatList, Pressable, Image,  ActivityIndicator} from "react-native";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


import { useFocusEffect } from "@react-navigation/native";

// URLS
import URL from "../../constant/url";

// ACTIONS
import { FETCH_ALL_USERS, FETCH_START } from "../../redux/adminUser.slice";

export default function UserAdmin() {
  const dispatch = useDispatch();

  // useSelector
  const { data, loading } = useSelector((state) => state.adminUser);

  useFocusEffect(
    React.useCallback(() => {
      const fetchUsers = async () => {
        dispatch(FETCH_START());
        try {
          const { data } = await axios.get(URL.GET_ALL_USERS);
          console.log(data);
          setTimeout(() => {
            dispatch(FETCH_ALL_USERS(data));
          }, 200);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchUsers();
    }, [])
  );

  const renderItem = ({ item }) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Detail", { id: item._id });
          }}
        >
          <Image source={{ uri: item.avatar }} style={styles.img} />
          <Text>{item.prenom}</Text>
          <Text>{item.email}</Text>
          <Text>{item.isActive ? "ACTIVE" : "INACTIF"}</Text>
        </Pressable>
        <Pressable
        onPress ={() => {
            deleteUser(item._id)
        }}
        >
           <Text>Desativer</Text> 
        </Pressable>     
      </View>
    );
  };

  const deleteUser = async (userId) =>{
    try {
        const {data} = await axios.put(URL.DESACTIVE_USER+)
    } catch (error) {
        console.log(error.message)
    }

  }


  return (
    <View>
      <Text>UserAdmin</Text>
      {loading == true ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    img: {
      width: 100,
      height: 90,
    },
  });
  