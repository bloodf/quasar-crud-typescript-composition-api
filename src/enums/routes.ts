export enum UserRouteName {
  List = 'USER_LIST',
  Create = 'USER_CREATE',
  Update = 'USER_UPDATE',
  View = 'USER_VIEW',
  Remove = 'USER_REMOVE',
}

export enum UserRoutePath {
  List = '',
  Create = '/register',
  Update = '/update/:id',
  View = '/view/:id',
  Remove = '/remove/:id',
}
