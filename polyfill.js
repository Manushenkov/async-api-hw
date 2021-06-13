Promise._allSettled = (arrayOfPromises) => {
  return new Promise(async resolve => {
    let results = []
    for (let promise of arrayOfPromises) {
      results.push(await promise.then(
        async resolvedData => await resolvedData, 
        async resolvedData => await resolvedData)
      )
          
      if (results.length === arrayOfPromises.length) resolve(results)
      }
    })
}

const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'first'))
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'second'))
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 2000, 'third'))

console.log('--- ---')
Promise._allSettled([promise1, promise2, promise3])
    .then(resolvedData => {
        console.log(resolvedData)
    })



Promise._any = (arrayOfPromises) => {
  return new Promise(async resolve => {
    let results = []
    for (let promise of arrayOfPromises) {
      results.push(await promise.then(
        async resolvedData => await resolve(resolvedData), 
        async resolvedData => await resolvedData)
      )
          
      if (results.length === arrayOfPromises.length) resolve(results)
      }
    })
}

console.log('--- ---')
Promise._any([promise1, promise2, promise3])
    .then(resolvedData => {
        console.log(resolvedData) 
    })


