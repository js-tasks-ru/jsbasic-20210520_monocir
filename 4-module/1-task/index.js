function makeFriendsList(friends) {

  const list = document.createElement('ul');
  for (const item of friends) {
      list.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`;
  }
  return list;

}