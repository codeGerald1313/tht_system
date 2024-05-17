export default function auth ({ next, store }){
  if (localStorage.activeUser) {
    return next({name: 'crm'})
  } 
  return next()
}