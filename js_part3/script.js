function profileLekarAao(username, cb) {
    setTimeout(function () {
        console.log("Fetching profile data...")
        console.log(`fetched profile is : ${username}`)
        cb({_id : 2131, username, age : 24, emai : "a@a.ocm"});
    }, 2000)
}

function sarePostLekarAao(id, cb) {
    console.log("Fetching all posts...")
    setTimeout(() => {
        cb({_id : id, posts : ["hey", "hello", "good morning"]})
    }, 2000)
}

function savedPostNikalo(id, cb) {
    setTimeout(() => {
        console.log("Fetching saved Posts")
        cb({_id : id, saved : [1,2,3,4,5,3,4,232,43]})
    }, 2000)
}

profileLekarAao("harsh", function (data) {
    console.log(data)
    sarePostLekarAao(data._id, function (posts) {
        console.log(posts)
        savedPostNikalo(data._id, function (saved) {
            console.log(saved)
        })
    })
})