// @flow

import { DrawerActions } from '@react-navigation/native';

let navigation: any | null = null;

export default {
  init(_navigation: any): void {  
    navigation = _navigation;
  },

  pop(): void {
    if(navigation){
      navigation.pop();
    }
  },

  push(screen: string, params?: any): void {
    if(navigation){
      navigation.push(screen,params);
    }
  },

  navigate(): void {
    if(navigation){
      navigation.navigate(screen);
    }
  },

  replace(screen: string, params?: any): void {
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