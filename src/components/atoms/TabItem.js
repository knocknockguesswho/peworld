import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  MessageIcon,
  SearchIcon,
  DashboardIcon,
  MessageIconActive,
  SearchIconActive,
  DashboardIconActive
} from '../../../assets/icon';

import {ProfilePicture} from '../atoms';
import {HomeBackground} from '../../../assets/images'



const TabItem = ({title, active, onPress, onLongPress}) => {


  const Icon = () => {
    if (title === 'Dashboard') {
      return active ? <DashboardIconActive /> : <DashboardIcon />;
    }
    if (title === 'Search') {
      return active ? <SearchIconActive /> : <SearchIcon />;
    }
    if (title === 'Message') {
      return active ? <MessageIconActive /> : <MessageIcon />;
    }
    if (title === 'Profile') {
      return active ? 
      <ProfilePicture height={28} width={28} source={HomeBackground} borderColor='#5E50A1' /> : 
      <ProfilePicture height={28} width={28} source={HomeBackground} />;
    }
    return <DashboardIcon />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? '#DB3022' : '#9B9B9B',
    marginTop: 5,
  }),
});