// @flow

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { type TScreens } from '../../src';

let navigation: any | null = null;

export default {
  init(): void {  
    navigation = useNavigation();
  },

  pop(): void {
    if(navigation){
      navigation.pop();
    }
  },

  push(screen: TScreens, params?: any): void {
    if(navigation){
      navigation.push(screen, params);
    }
  },

  navigate(screen: TScreens): void {
    if(navigation){
      navigation.navigate(screen);
    }
  },

  replace(screen: TScreens, params?: any): void {
    if(navigation){
      navigation.replace(screen, params);
    }
  },

  isFocused(): boolean {
    if(navigation){
      return navigation.isFocused();
    }
    return false;
  },

  openDrawer(): void {
    if(navigation){
      navigation.dispatch(DrawerActions.openDrawer());
    }
  },

  closeDrawer(): void {
    if(navigation){
      navigation.dispatch(DrawerActions.closeDrawer());
    }
  },

  toggleDrawer(): void {
    if(navigation){
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  }
}