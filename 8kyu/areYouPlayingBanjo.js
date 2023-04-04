function areYouPlayingBanjo(name) {
    // Implement me
    let str = name.toLowerCase() 
    let arrName =  str.split('')
    if ( arrName[0] === 'r') {
     return `${name} plays banjo`; 
    } else {
      return `${name} does not play banjo`
    }
}

// 8kyu