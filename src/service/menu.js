const leftmenu = [{
  id: 1,
  text: 'My Index',
  url: '#/index/userinfo',
  level:'1'
}, {
  id: 2,
  text: 'Infomations',
  level:'1',
  childItem: [{
    id: 21,
    text: 'My Phone',
    level:'2',
     url: '#/index/phone',
  }, {
    id: 21,
    text: 'My PC',
    level:'2',
     url: '#/index/pc',
  }]
}, {
  id: 2,
  text: 'Settings',
  level:'1',
}
];
export const getLeftMenus = ({ dispatch }, userType) => {
  setTimeout(() => dispatch('getLeftMenus', leftmenu), 100);
};