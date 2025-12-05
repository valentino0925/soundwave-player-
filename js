const musicDatabase = [
    {
        "id": 1,
        "title": "Levitating",
        "artist": "Dua Lipa ft. DaBaby",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
        "youtubeId": "TUVcZfQe-Kw",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/TUVcZfQe-Kw?list=RDTUVcZfQe-Kw" title="Dua Lipa - Levitating Featuring DaBaby (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 2,
        "title": "SICKO MODE",
        "artist": "Travis Scott ft. Drake",
        "genre": "hip-hop",
        "mood": "intense",
        "cover": "https://i.ytimg.com/vi/6ONRf7h3Mdk/hqdefault.jpg",
        "youtubeId": "6ONRf7h3Mdk",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/6ONRf7h3Mdk?list=RD6ONRf7h3Mdk" title="Travis Scott - SICKO MODE (Official Video) ft. Drake" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 3,
        "title": "FE!N",
        "artist": "Travis Scott ft. Playboi Carti",
        "genre": "hip-hop",
        "mood": "intense",
        "cover": "https://i.ytimg.com/vi/B9synWjqBn8/hqdefault.jpg",
        "youtubeId": "B9synWjqBn8",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/B9synWjqBn8?list=RDB9synWjqBn8" title="Travis Scott - FE!N ft. Playboi Carti" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 4,
        "title": "SAD!",
        "artist": "XXXTENTACION",
        "genre": "hip-hop", 
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/pgN-vvVVxMA/maxresdefault.jpg",
        "youtubeId": "pgN-vvVVxMA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/pgN-vvVVxMA?list=RDpgN-vvVVxMA" title="XXXTENTACION - SAD!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 5,
        "title": "Tek Tek",
        "artist": "Juicce, Ishimaru",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/dzo0UoPHZPU/hqdefault.jpg",
        "youtubeId": "dzo0UoPHZPU",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/dzo0UoPHZPU?list=RDdzo0UoPHZPU" title="Juicce, Ishimaru - Tek Tek Tek (Official Audio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 6,
        "title": "Gangnam Style",
        "artist": "PSY",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
        "youtubeId": "9bZkp7q19f0",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/yDiXQl7X0UY?list=RDyDiXQl7X0UY" title="Steve Aoki, Chris Lake & Tujamo - Boneless (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 7,
        "title": "Lean On",
        "artist": "Major Lazer & DJ Snake ft. MØ",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/YqeW9_5kURI/hqdefault.jpg",
        "youtubeId": "YqeW9_5kURI",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/YqeW9_5kURI?list=RDYqeW9_5kURI" title="Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 8,
        "title": "ELALUDNI",
        "artist": "Desh",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/_8x21zThSXQ/hqdefault.jpg",
        "youtubeId": "_8x21zThSXQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/_8x21zThSXQ?list=RDATVPXuVdD9M" title="Kungs vs Cookin\' on 3 Burners - This Girl (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 9,
        "title": "Seve",
        "artist": "Tez Cadey",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/8aShfolR6w8/hqdefault.jpg",
        "youtubeId": "8aShfolR6w8",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/8aShfolR6w8?list=RD8aShfolR6w8" title="Tez Cadey - Seve (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 10,
        "title": "California Gurls",
        "artist": "Katy Perry ft. Snoop Dogg",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/F57P9C4SAW4/hqdefault.jpg",
        "youtubeId": "F57P9C4SAW4",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/F57P9C4SAW4?list=RD6Uyu7Wq-VOs" title="Robin Schulz - Sugar (feat. Francesco Yates) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 11,
        "title": "Attention",
        "artist": "Charlie Puth",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
        "youtubeId": "nfs8NYg7yQM",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/nfs8NYg7yQM?list=RD6Uyu7Wq-VOs" title="Jonas Blue - Fast Car (feat. Dakota) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 12,
        "title": "Riptide",
        "artist": "Vance Joy",
        "genre": "indie",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/uJ_1HMAGb4k/hqdefault.jpg",
        "youtubeId": "uJ_1HMAGb4k",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/uJ_1HMAGb4k?list=RDuJ_1HMAGb4k" title="Vance Joy - Riptide (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 13,
        "title": "Ho Hey",
        "artist": "The Lumineers",
        "genre": "indie",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/zvCBSSwgtg4/hqdefault.jpg",
        "youtubeId": "zvCBSSwgtg4",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/zvCBSSwgtg4?list=RDzvCBSSwgtg4" title="The Lumineers - Ho Hey (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 14,
        "title": "Little Talks",
        "artist": "Of Monsters and Men",
        "genre": "indie",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/ghb6eDopW8I/hqdefault.jpg",
        "youtubeId": "ghb6eDopW8I",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/ghb6eDopW8I?list=RDghb6eDopW8I" title="Of Monsters and Men - Little Talks (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 15,
        "title": "Pumped Up Kicks",
        "artist": "Foster The People",
        "genre": "indie",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/SDTZ7iX4vTQ/hqdefault.jpg",
        "youtubeId": "SDTZ7iX4vTQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/SDTZ7iX4vTQ?list=RDSDTZ7iX4vTQ" title="Foster The People - Pumped Up Kicks (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 16,
        "title": "Take Me To Church",
        "artist": "Hozier",
        "genre": "indie",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/PVjiKRfKpPI/hqdefault.jpg",
        "youtubeId": "PVjiKRfKpPI",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/PVjiKRfKpPI?list=RDPVjiKRfKpPI" title="Hozier - Take Me To Church (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 17,
        "title": "I need",
        "artist": "Lithe",
        "genre": "indie",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/QeeIBwJ7ztc/hqdefault.jpg",
        "youtubeId": "QeeIBwJ7ztc",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/QeeIBwJ7ztc?list=RDVHR9fP9wKCQ" title="George Ezra - Budapest (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 18,
        "title": "Shut Up and Dance",
        "artist": "Walk the Moon",
        "genre": "indie",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/6JCLY0Rlx6Q/hqdefault.jpg",
        "youtubeId": "6JCLY0Rlx6Q",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/6JCLY0Rlx6Q?list=RD6JCLY0Rlx6Q" title="Walk the Moon - Shut Up and Dance (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 19,
        "title": "Stolen Dance",
        "artist": "Milky Chance",
        "genre": "indie",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/iX-QaNzd-0Y/hqdefault.jpg",
        "youtubeId": "iX-QaNzd-0Y",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/iX-QaNzd-0Y?list=RDiX-QaNzd-0Y" title="Milky Chance - Stolen Dance (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 20,
        "title": "Roses",
        "artist": "The Chainsmokers ft. ROZES",
        "genre": "electronic",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/FyASdjZE0R0/hqdefault.jpg",
        "youtubeId": "FyASdjZE0R0",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/FyASdjZE0R0?list=RDFyASdjZE0R0" title="The Chainsmokers - Roses (feat. ROZES) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 21,
        "title": "Blade",
        "artist": "NicJohnston",
        "genre": "electronic",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/n_F8JsQvWCI/hqdefault.jpg",
        "youtubeId": "n_F8JsQvWCI",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/n_F8JsQvWCI?list=RDJOMgQxJUaOc" title="The Chainsmokers - Don\'t Let Me Down (feat. Daya) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 22,
        "title": "Closer",
        "artist": "The Chainsmokers ft. Halsey",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/PT2_F-1esPk/hqdefault.jpg",
        "youtubeId": "PT2_F-1esPk",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/PT2_F-1esPk?list=RDPT2_F-1esPk" title="The Chainsmokers - Closer (feat. Halsey) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 23,
        "title": "Something Just Like This",
        "artist": "The Chainsmokers & Coldplay",
        "genre": "electronic",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/FM7MFYoylVs/hqdefault.jpg",
        "youtubeId": "FM7MFYoylVs",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/FM7MFYoylVs?list=RDFM7MFYoylVs" title="The Chainsmokers & Coldplay - Something Just Like This (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 24,
        "title": "Houdini",
        "artist": "Dua Lipa",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/suAR1PYFNYA/hqdefault.jpg",
        "youtubeId": "suAR1PYFNYA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/suAR1PYFNYA?list=RDzijd6Vy3jlw" title="The Chainsmokers - Paris (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 25,
        "title": "Set Me Free",
        "artist": "Rick Wayne",
        "genre": "electronic",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/2n4II5XAoI4/hqdefault.jpg",
        "youtubeId": "2n4II5XAoI4",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/2n4II5XAoI4?list=RD2takfLp1m8E" title="The Chainsmokers - All We Know (feat. Phoebe Ryan) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 26,
        "title": "Wake Me Up",
        "artist": "Avicii ft. Aloe Blacc",
        "genre": "electronic",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/IcrbM1l_BoI/hqdefault.jpg",
        "youtubeId": "IcrbM1l_BoI",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/IcrbM1l_BoI?list=RDIcrbM1l_BoI" title="Avicii - Wake Me Up (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 27,
        "title": "The Nights",
        "artist": "Avicii",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/UtF6Jej8yb4/hqdefault.jpg",
        "youtubeId": "UtF6Jej8yb4",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/UtF6Jej8yb4?list=RDUtF6Jej8yb4" title="Avicii - The Nights (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 28,
        "title": "Waiting For Love",
        "artist": "Avicii",
        "genre": "electronic",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/cHHLHGNpCSA/hqdefault.jpg",
        "youtubeId": "cHHLHGNpCSA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/cHHLHGNpCSA?list=RDcHHLHGNpCSA" title="Avicii - Waiting For Love (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 29,
        "title": "Hey Mama",
        "artist": "David Guetta ft. Bebe Rexha, Nicki Minaj & Afrojack",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/bWXazVhlyxQ/hqdefault.jpg",
        "youtubeId": "bWXazVhlyxQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/bWXazVhlyxQ?list=RD bWXazVhlyxQ" title="David Guetta - Hey Mama (feat. Bebe Rexha, Nicki Minaj & Afrojack) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 30,
        "title": "Turn Down for What",
        "artist": "DJ Snake & Lil Jon",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/HMUDVMiITOU/hqdefault.jpg",
        "youtubeId": "HMUDVMiITOU",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/HMUDVMiITOU?list=RDHMUDVMiITOU" title="DJ Snake & Lil Jon - Turn Down for What (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 31,
        "title": "Middle",
        "artist": "DJ Snake ft. Bipolar Sunshine",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/mOKqNxN4jWM/hqdefault.jpg",
        "youtubeId": "mOKqNxN4jWM",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/mOKqNxN4jWM?list=RDmOKqNxN4jWM" title="DJ Snake - Middle (feat. Bipolar Sunshine) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 32,
        "title": "PROSECCO",
        "artist": "KKevin ft. Bruno",
        "genre": "hip-hop",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/sCtrOvKNI2o/hqdefault.jpg",
        "youtubeId": "sCtrOvKNI2o",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/sCtrOvKNI2o?list=RDeuCqAq6BRa4" title="DJ Snake - Let Me Love You (feat. Justin Bieber) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 33,
        "title": "NINTENDO",
        "artist": "BRUNO",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/HVl7whxBCB0/hqdefault.jpg",
        "youtubeId": "HVl7whxBCB0",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/HVl7whxBCB0?list=RD5j5iG6d2g8E" title="DJ Snake & AlunaGeorge - You Know You Like It (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 34,
        "title": "HIGHEST IN THE ROOM",
        "artist": "Travis Scott",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/tfSS1e3kYeo/hqdefault.jpg",
        "youtubeId": "tfSS1e3kYeo",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/tfSS1e3kYeo?list=RD6V9s0K3TW4" title="Duke Dumont - Ocean Drive (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 35,
        "title": "Pictures Of Me",
        "artist": "FoarCass x Roof Rats ",
        "genre": "electronic",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/_15lLrZdiXQ/hqdefault.jpg",
        "youtubeId": "_15lLrZdiXQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/_15lLrZdiXQ?list=RD6V9s0K3TW4" title="Duke Dumont - Need U (100%) (feat. A*M*E) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 36,
        "title": "LOW",
        "artist": "KIDDA",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/WnE68Oe0Wqk/hqdefault.jpg",
        "youtubeId": "WnE68Oe0Wqk",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/WnE68Oe0Wqk?list=RD4Oy2H0Eu3Ic" title="Faul & Wad Ad vs. Pnau - Changes (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 37,
        "title": "Prayer in C",
        "artist": "Lilly Wood & The Prick",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/fCcDvEPGtes/hqdefault.jpg",
        "youtubeId": "fCcDvEPGtes",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/fCcDvEPGtes?list=RDfCcDvEPGtes" title="Lilly Wood & The Prick - Prayer in C (Robin Schulz Remix) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 38,
        "title": "Waves",
        "artist": "Robin Schulz ft. Mr. Probz",
        "genre": "electronic",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
        "youtubeId": "hTWKbfoikeg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/hTWKbfoikeg?list=RDhTWKbfoikeg" title="Robin Schulz - Waves (feat. Mr. Probz) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 39,
        "title": "Without Me",
        "artist": "Eminem",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/YVkUvmDQ3HY/hqdefault.jpg",
        "youtubeId": "YVkUvmDQ3HY",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/YVkUvmDQ3HY?list=RD6V9s0K3TW4" title="Robin Schulz - Headlights (feat. Ilsey) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 40,
        "title": "Abracadabra",
        "artist": "Lady Gaga",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/vBynw9Isr28/hqdefault.jpg",
        "youtubeId": "vBynw9Isr28",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/vBynw9Isr28?list=RD6V9s0K3TW4" title="Robin Schulz - Show Me Love (feat. J.U.D.G.E.) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 41,
        "title": "Minecraft",
        "artist": "Markus Persson",
        "genre": "vibe",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/BqPgeWf8vNM/hqdefault.jpg",
        "youtubeId": "BqPgeWf8vNM",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/BqPgeWf8vNM?list=RD6V9s0K3TW4" title="Robin Schulz - Sun Goes Down (feat. Jasmine Thompson) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 42,
        "title": "50 Cent",
        "artist": "Ayo Technology",
        "genre": "rap",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/oxt33W6bIBA/hqdefault.jpg",
        "youtubeId": "oxt33W6bIBA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/oxt33W6bIBA?list=RD6V9s0K3TW4" title="Robin Schulz - OK (feat. James Blunt) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 43,
        "title": "A Deeper Love",
        "artist": "Paul Luke",
        "genre": "electronic",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/QzYqzK85Smg/hqdefault.jpg",
        "youtubeId": "QzYqzK85Smg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/QzYqzK85Smg?list=RD6Uyu7Wq-VOs" title="Robin Schulz - Sugar (feat. Francesco Yates) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 44,
        "title": "Blinding Lights",
        "artist": "The Weeknd",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
        "youtubeId": "4NRXx6U8ABQ",
        "embedCode": 'iframe width="1296" height="729" src="https://www.youtube.com/embed/4NRXx6U8ABQ?list=RD4NRXx6U8ABQ" title="Blinding Lights (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 45,
        "title": "Watermelon Sugar",
        "artist": "Harry Styles",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/E07s5ZYygMg/hqdefault.jpg",
        "youtubeId": "E07s5ZYygMg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/E07s5ZYygMg?list=RDE07s5ZYygMg" title="Watermelon Sugar (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 46,
        "title": "Good 4 U",
        "artist": "Olivia Rodrigo",
        "genre": "pop",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/gNi_6U5Pm_o/hqdefault.jpg",
        "youtubeId": "gNi_6U5Pm_o",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/gNi_6U5Pm_o?list=RDgNi_6U5Pm_o" title="Good 4 U (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 47,
        "title": "Peaches",
        "artist": "Justin Bieber ft. Daniel Caesar & Giveon",
        "genre": "pop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/tQ0yjYUFKAE/hqdefault.jpg",
        "youtubeId": "tQ0yjYUFKAE",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/tQ0yjYUFKAE?list=RDtQ0yjYUFKAE" title="Peaches (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 48,
        "title": "Friday (Ft Mufasa & Hypeman) (Powerhitz Radio Edit)",
        "artist": "Riton & Nightcrawlers",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/4vMWQROHmao/hqdefault.jpg",
        "youtubeId": "4vMWQROHmao",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/4vMWQROHmao" title="Montero (Call Me By Your Name) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 49,
        "title": "Leave the Door Open",
        "artist": "Silk Sonic (Bruno Mars & Anderson .Paak)",
        "genre": "pop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/adLGHcj_fmA/hqdefault.jpg",
        "youtubeId": "adLGHcj_fmA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/adLGHcj_fmA?list=RDadLGHcj_fmA" title="Leave the Door Open (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 50,
        "title": "Drivers License",
        "artist": "Olivia Rodrigo",
        "genre": "pop",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/ZmDBbnmKpqQ/hqdefault.jpg",
        "youtubeId": "ZmDBbnmKpqQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/ZmDBbnmKpqQ?list=RDZmDBbnmKpqQ" title="Drivers License (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 51,
        "title": "What's Next",
        "artist": "Drake",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/6ha7uL-WiJQ/hqdefault.jpg",
        "youtubeId": "6ha7uL-WiJQ",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/6ha7uL-WiJQ?list=RD6ha7uL-WiJQ" title="What\'s Next (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 52,
        "title": "Up",
        "artist": "Cardi B",
        "genre": "hip-hop",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/UceW2Z3Vzfo/hqdefault.jpg",
        "youtubeId": "UceW2Z3Vzfo",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/UceW2Z3Vzfo?list=RDUceW2Z3Vzfo" title="Up (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 53,
        "title": "Agartha",
        "artist": "Ft Pintér Gergő meg Gyurik Áron",
        "genre": "hip-hop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/MLQ9i8Xp5pU/hqdefault.jpg",
        "youtubeId": "MLQ9i8Xp5pU",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/MLQ9i8Xp5pU?list=RDhpWiJ8cZqYk" title="What\'s Poppin (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 54,
        "title": "Mood",
        "artist": "24kGoldn ft. Iann Dior",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/GrAchTdepsU/hqdefault.jpg",
        "youtubeId": "GrAchTdepsU",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/GrAchTdepsU?list=RDGrAchTdepsU" title="Mood (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 55,
        "title": "Life Goes On",
        "artist": "BTS",
        "genre": "pop",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/-5q5mZbe3V8/hqdefault.jpg",
        "youtubeId": "-5q5mZbe3V8",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/-5q5mZbe3V8?list=RD-5q5mZbe3V8" title="Life Goes On (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 56,
        "title": "Dynamite",
        "artist": "BTS",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg",
        "youtubeId": "gdZLi9oWNZg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/gdZLi9oWNZg?list=RDgdZLi9oWNZg" title="Dynamite (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 57,
        "title": "Butter",
        "artist": "BTS",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/WMweEpGlu_U/hqdefault.jpg",
        "youtubeId": "WMweEpGlu_U",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/WMweEpGlu_U?list=RDWMweEpGlu_U" title="Butter (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 58,
        "title": "Permission to Dance",
        "artist": "BTS",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/CuklIb9d3fI/hqdefault.jpg",
        "youtubeId": "CuklIb9d3fI",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/CuklIb9d3fI?list=RDCuklIb9d3fI" title="Permission to Dance (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 59,
        "title": "Stay",
        "artist": "The Kid Laroi & Justin Bieber",
        "genre": "pop",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/kTJczUoc26U/hqdefault.jpg",
        "youtubeId": "kTJczUoc26U",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/kTJczUoc26U?list=RDkTJczUoc26U" title="Stay (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 60,
        "title": "Industry Baby",
        "artist": "Lil Nas X & Jack Harlow",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/UTHLKHL_whs/hqdefault.jpg",
        "youtubeId": "UTHLKHL_whs",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/UTHLKHL_whs?list=RDUTHLKHL_whs" title="Industry Baby (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 61,
        "title": "Way 2 Sexy",
        "artist": "Drake ft. Future",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/9nI1qZtoyMg/hqdefault.jpg",
        "youtubeId": "9nI1qZtoyMg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/9nI1qZtoyMg?list=RD9nI1qZtoyMg" title="Way 2 Sexy (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 62,
        "title": "My Universe",
        "artist": "Coldplay x BTS",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/xTx21AtzLMA/hqdefault.jpg",
        "youtubeId": "xTx21AtzLMA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/xTx21AtzLMA?list=RDxTx21AtzLMA" title="My Universe (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 63,
        "title": "Positions",
        "artist": "Ariana Grande",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg",
        "youtubeId": "tcYodQoapMg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/tcYodQoapMg?list=RDtcYodQoapMg" title="Positions (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 64,
        "title": "Mood Swings",
        "artist": "Pop Smoke ft. Lil Tjay",
        "genre": "hip-hop",
        "mood": "intense",
        "cover": "https://i.ytimg.com/vi/8dCB_-iUuDY/hqdefault.jpg",
        "youtubeId": "8dCB_-iUuDY",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/8dCB_-iUuDY?list=RD8dCB_-iUuDY" title="Mood Swings (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 65,
        "title": "For The Night",
        "artist": "Pop Smoke ft. Lil Baby & DaBaby",
        "genre": "hip-hop",
        "mood": "chill",
        "cover": "https://i.ytimg.com/vi/Q9pjm4cNsfc/hqdefault.jpg",
        "youtubeId": "Q9pjm4cNsfc",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/Q9pjm4cNsfc?list=RDQ9pjm4cNsfc" title="For The Night (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 66,
        "title": "Savage Love (Laxed – Siren Beat)",
        "artist": "Jawsh 685 & Jason Derulo",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/JtNDrAuHQqE/hqdefault.jpg",
        "youtubeId": "JtNDrAuHQqE",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/JtNDrAuHQqE?list=RDJtNDrAuHQqE" title="Savage Love (Laxed – Siren Beat) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 67,
        "title": "Roses",
        "artist": "SAINt JHN",
        "genre": "electronic",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/ei3K0I8pF5c/hqdefault.jpg",
        "youtubeId": "ei3K0I8pF5c",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/ei3K0I8pF5c?list=RDei3K0I8pF5c" title="Roses (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 68,
        "title": "Don't Start Now",
        "artist": "Dua Lipa",
        "genre": "pop",
        "mood": "upbeat",
        "cover": "https://i.ytimg.com/vi/JxGjEvGItnA/hqdefault.jpg",
        "youtubeId": "JxGjEvGItnA",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/JxGjEvGItnA?list=RDJxGjEvGItnA" title="Don\'t Start Now (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 69,
        "title": "Physical",
        "artist": "Dua Lipa",
        "genre": "pop",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/9HDEHj2yzew/hqdefault.jpg",
        "youtubeId": "9HDEHj2yzew",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/9HDEHj2yzew?list=RD9HDEHj2yzew" title="Physical (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 70,
        "title": "Break My Soul",
        "artist": "Beyoncé",
        "genre": "pop",
        "mood": "energetic",
        "cover": "https://i.ytimg.com/vi/hsm4poTWjMs/hqdefault.jpg",
        "youtubeId": "hsm4poTWjMs",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/hsm4poTWjMs?list=RDhsm4poTWjMs" title="Break My Soul (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 71,
        "title": "All Too Well (10 Minute Version)",
        "artist": "Taylor Swift",
        "genre": "indie",
        "mood": "emotional",
        "cover": "https://i.ytimg.com/vi/tJlW0k5hFF8/hqdefault.jpg",
        "youtubeId": "tJlW0k5hFF8",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/tJlW0k5hFF8?list=RDtJlW0k5hFF8" title="All Too Well (10 Minute Version) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 72,
        "title": "Anti-Hero",
        "artist": "Taylor Swift",
        "genre": "pop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/b1kbLwvqugk/hqdefault.jpg",
        "youtubeId": "b1kbLwvqugk",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/b1kbLwvqugk?list=RD b1kbLwvqugk" title="Anti-Hero (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
    {
        "id": 73,
        "title": "Unholy",
        "artist": "Sam Smith & Kim Petras",
        "genre": "pop",
        "mood": "intense",
        "cover": "https://i.ytimg.com/vi/Uq9gPaIzbe8/hqdefault.jpg",
        "youtubeId": "Uq9gPaIzbe8",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/Uq9gPaIzbe8?list=RDUq9gPaIzbe8" title="Unholy (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": false,
        "popular": true
    },
    {
        "id": 74,
        "title": "It's Beginning To Look A Lot Like Christmas",
        "artist": "Michael Bublé",
        "genre": "hip-hop",
        "mood": "fun",
        "cover": "https://i.ytimg.com/vi/QJ5DOWPGxwg/hqdefault.jpg",
        "youtubeId": "QJ5DOWPGxwg",
        "embedCode": '<iframe width="1296" height="729" src="https://www.youtube.com/embed/QJ5DOWPGxwg" title="Montero (Call Me By Your Name) (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        "featured": true,
        "popular": true
    },
];

// YouTube Player Variables
let youtubePlayer;
let currentSongIndex = 0
let isPlaying = false
let progressInterval
let userInteracted = false
let isShuffle = false

// Pagination Variables
let currentPage = 1;
const songsPerPage = 20;

// Search Variables
let searchQuery = '';

// YouTube IFrame API Ready
function onYouTubeIframeAPIReady() {
    console.log('✅ YouTube API Ready');
    
    youtubePlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            'enablejsapi': 1,
            'fs': 0,
            'rel': 0,
            'modestbranding': 1,
            'autoplay': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError
        }
    });
}

function onPlayerReady(event) {
    console.log('✅ YouTube Player Ready');
    loadSong(0, false);
}

function onPlayerStateChange(event) {
    console.log('🎵 Player State:', getStateName(event.data));
    
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            isPlaying = true;
            updatePlayButton();
            document.querySelector('.player').classList.add('playing');
            startProgressUpdate();
            break;
        case YT.PlayerState.PAUSED:
            isPlaying = false;
            updatePlayButton();
            document.querySelector('.player').classList.remove('playing');
            stopProgressUpdate();
            break;
        case YT.PlayerState.ENDED:
            nextSong();
            break;
    }
}

function onPlayerError(event) {
    console.error('❌ YouTube Player Error:', event.data);
    showToast('YouTube error: ' + getYouTubeError(event.data));
}

function getStateName(state) {
    const states = {
        '-1': 'UNSTARTED',
        '0': 'ENDED', 
        '1': 'PLAYING',
        '2': 'PAUSED',
        '3': 'BUFFERING',
        '5': 'CUED'
    };
    return states[state] || 'UNKNOWN';
}

function getYouTubeError(errorCode) {
    const errors = {
        2: 'Invalid URL',
        5: 'HTML5 error',
        100: 'Video not found',
        101: 'Embedding not allowed',
        150: 'Embedding not allowed'
    };
    return errors[errorCode] || 'Unknown error';
}

// Load Song using your embed codes
function loadSong(index, autoPlay = true) {
    const song = musicDatabase[index];
    console.log('🎵 Loading song:', song.title);
    
    // Update UI
    document.getElementById('current-song-title').textContent = song.title;
    document.getElementById('current-song-artist').textContent = song.artist;
    document.getElementById('current-song-thumb').src = song.cover;
    
    currentSongIndex = index;
    
    // Load YouTube video using the ID from your embed code
    if (youtubePlayer && youtubePlayer.loadVideoById) {
        youtubePlayer.loadVideoById(song.youtubeId);
        console.log('✅ YouTube video loaded:', song.youtubeId);
        
        if (autoPlay && userInteracted) {
            setTimeout(() => {
                playCurrentSong();
            }, 1000);
        }
    }
    
    updateFavoriteIcon(song.id);
    
    if (autoPlay && !userInteracted) {
        showToast('Click the page first, then click a song!');
    }
}

// Play Current Song
function playCurrentSong() {
    if (youtubePlayer && userInteracted) {
        console.log('▶️ Starting playback...');
        youtubePlayer.playVideo();
    } else if (!userInteracted) {
        showToast('Please click the page first!');
    }
}

// Play/Pause
function togglePlayPause() {
    if (!youtubePlayer || !userInteracted) {
        showToast('Please click the page first!');
        return;
    }
    
    if (isPlaying) {
        youtubePlayer.pauseVideo();
        console.log('⏸️ Paused');
        showToast('Paused');
    } else {
        youtubePlayer.playVideo();
        console.log('▶️ Playing');
        showToast('Playing');
    }
}

// Update Play Button
function updatePlayButton() {
    const playIcon = document.querySelector('#play-pause i');
    if (isPlaying) {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

// Player Animation
function updatePlayerAnimation() {
    if (isPlaying) {
        document.querySelector('.player').classList.add('playing');
    } else {
        document.querySelector('.player').classList.remove('playing');
    }
}

// Progress Update
function updateProgress() {
    if (youtubePlayer && youtubePlayer.getCurrentTime && youtubePlayer.getDuration) {
        const currentTime = youtubePlayer.getCurrentTime();
        const duration = youtubePlayer.getDuration();
        
        if (duration > 0) {
            const progressPercent = (currentTime / duration) * 100;
            document.getElementById('progress').style.width = `${progressPercent}%`;
            document.getElementById('current-time').textContent = formatTime(currentTime);
            document.getElementById('duration').textContent = formatTime(duration);
        }
    }
}

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Progress Interval
function startProgressUpdate() {
    stopProgressUpdate();
    progressInterval = setInterval(updateProgress, 1000);
}

function stopProgressUpdate() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// Seek Progress
function setProgress(e) {
    if (!youtubePlayer || !userInteracted) return;

    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = youtubePlayer.getDuration();

    if (duration > 0) {
        const seekTime = (clickX / width) * duration;
        youtubePlayer.seekTo(seekTime, true);
        console.log('Seeking to:', seekTime, 'seconds');
    }
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    const shuffleBtn = document.getElementById('shuffle');
    if (isShuffle) {
        shuffleBtn.classList.add('active');
        showToast('Shuffle mode enabled');
    } else {
        shuffleBtn.classList.remove('active');
        showToast('Shuffle mode disabled');
    }
    console.log('🔀 Shuffle mode:', isShuffle ? 'ON' : 'OFF');
}

// Navigate to Page
function navigateToPage(page) {
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    // Hide all pages
    document.querySelectorAll('.music-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.style.display = 'block';
    }

    // Update current page and song list
    currentNavPage = page;
    currentPage = 1; // Reset to first page
    searchQuery = ''; // Clear search
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    // Set song list based on page
    switch (page) {
        case 'home':
            currentSongList = musicDatabase;
            break;
        case 'favorites':
            currentSongList = musicDatabase.filter(song => appState.favorites.includes(song.id));
            break;
        case 'discover':
            currentSongList = musicDatabase.filter(song => song.featured);
            break;
        case 'trending':
            currentSongList = musicDatabase.filter(song => song.popular);
            break;
        default:
            currentSongList = musicDatabase;
    }

    renderSongs();
    console.log(`📄 Navigated to ${page} page`);
}

// Volume Control
function setVolume() {
    const volume = document.getElementById('volume-slider').value * 100;
    if (youtubePlayer && youtubePlayer.setVolume) {
        youtubePlayer.setVolume(volume);
    }

    const volumeIcon = document.getElementById('volume-icon');
    if (volume == 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.add('fa-volume-mute');
    } else if (volume < 50) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-down');
    } else {
        volumeIcon.classList.remove('fa-volume-down');
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
}

// Next Song
function nextSong() {
    if (!userInteracted) {
        showToast('Please click the page first!');
        return;
    }

    let nextIndex;
    if (isShuffle) {
        // Random song selection in shuffle mode
        do {
            nextIndex = Math.floor(Math.random() * musicDatabase.length);
        } while (nextIndex === currentSongIndex && musicDatabase.length > 1);
    } else {
        nextIndex = (currentSongIndex + 1) % musicDatabase.length;
    }

    console.log('⏭️ Next song:', musicDatabase[nextIndex].title);
    loadSong(nextIndex, isPlaying);
}

// Previous Song
function prevSong() {
    if (!userInteracted) {
        showToast('Please click the page first!');
        return;
    }

    let prevIndex;
    if (isShuffle) {
        // Random song selection for previous in shuffle mode
        do {
            prevIndex = Math.floor(Math.random() * musicDatabase.length);
        } while (prevIndex === currentSongIndex && musicDatabase.length > 1);
    } else {
        prevIndex = (currentSongIndex - 1 + musicDatabase.length) % musicDatabase.length;
    }

    console.log('⏮️ Previous song:', musicDatabase[prevIndex].title);
    loadSong(prevIndex, isPlaying);
}

// Favorite Functions
function updateFavoriteIcon(songId) {
    const isFavorite = appState.favorites.includes(songId);
    document.getElementById('player-favorite').className = isFavorite ? 
        'fas fa-heart favorite active' : 'far fa-heart';
}

function toggleFavorite(songId) {
    const index = appState.favorites.indexOf(songId);
    if (index === -1) {
        appState.favorites.push(songId);
        showToast('Added to favorites');
    } else {
        appState.favorites.splice(index, 1);
        showToast('Removed from favorites');
    }
    updateFavoriteIcon(songId);
}

// Create Song Card
function createSongCard(song, index) {
    const isFavorite = appState.favorites.includes(song.id);
    
    const songCard = document.createElement('div');
    songCard.className = 'song-card';
    songCard.setAttribute('data-id', song.id);
    
    songCard.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="album-cover">
        <div class="song-actions">
            <i class="${isFavorite ? 'fas' : 'far'} fa-heart favorite-btn ${isFavorite ? 'active' : ''}"></i>
        </div>
        <div class="song-card-content">
            <div class="song-card-title">${song.title}</div>
            <div class="song-card-artist">${song.artist}</div>
        </div>
    `;
    
    songCard.addEventListener('click', (e) => {
        if (!e.target.closest('.song-actions')) {
            console.log('🎵 Clicked:', song.title);
            
            if (!userInteracted) {
                userInteracted = true;
                console.log('✅ User interaction recorded');
                showToast('Ready! Loading music...');
            }
            
            loadSong(index, true);
        }
    });
    
    const favBtn = songCard.querySelector('.favorite-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(song.id);
        favBtn.className = appState.favorites.includes(song.id) ? 
            'fas fa-heart favorite-btn active' : 'far fa-heart favorite-btn';
    });
    
    return songCard;
}

// Render Songs with Search and Pagination
function renderSongs() {
    const container = document.getElementById(`${currentNavPage}-songs`);
    if (!container) {
        console.error(`❌ ${currentNavPage}-songs container not found`);
        return;
    }

    container.innerHTML = '';

    // Filter songs based on search query
    let filteredSongs = currentSongList;
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        filteredSongs = currentSongList.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.genre.toLowerCase().includes(query)
        );
    }

    // Paginate filtered results
    const startIndex = (currentPage - 1) * songsPerPage;
    const endIndex = startIndex + songsPerPage;
    const songsToRender = filteredSongs.slice(startIndex, endIndex);

    songsToRender.forEach((song, pageIndex) => {
        const globalIndex = musicDatabase.indexOf(song); // Get original index for playback
        container.appendChild(createSongCard(song, globalIndex));
    });

    console.log('✅ Songs rendered for page', currentPage, ':', songsToRender.length, 'filtered from', filteredSongs.length);

    // Render pagination controls with filtered count
    renderPagination(filteredSongs.length);
}

// Render Pagination Controls
function renderPagination(totalSongs) {
    const totalPages = Math.ceil(totalSongs / songsPerPage);
    const paginationContainer = document.getElementById('pagination-controls');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Előző';
    prevBtn.className = 'pagination-btn';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderSongs();
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Page numbers (show max 5 pages around current)
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = 'pagination-btn';
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderSongs();
        });
        paginationContainer.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Következő';
    nextBtn.className = 'pagination-btn';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderSongs();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// App State
const appState = {
    currentSongIndex: 0,
    isPlaying: false,
    favorites: JSON.parse(localStorage.getItem('soundwave_favorites')) || []
};

// Navigation State
let currentNavPage = 'home';
let currentSongList = musicDatabase;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ SoundWave YouTube Player Started');
    
    // Create YouTube player div if it doesn't exist
    if (!document.getElementById('youtube-player')) {
        const playerDiv = document.createElement('div');
        playerDiv.id = 'youtube-player';
        playerDiv.style.display = 'none';
        document.body.appendChild(playerDiv);
        console.log('✅ YouTube player div created');
    }
    
    // User interaction handler
    document.body.addEventListener('click', function initUserInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            console.log('✅ User interaction - autoplay enabled');
            showToast('Ready! Click on songs to play.');
        }
    });
    
    // Event listeners
    document.getElementById('play-pause').addEventListener('click', togglePlayPause);
    document.getElementById('next').addEventListener('click', nextSong);
    document.getElementById('prev').addEventListener('click', prevSong);
    document.getElementById('shuffle').addEventListener('click', toggleShuffle);
    document.getElementById('progress-bar').addEventListener('click', setProgress);
    document.getElementById('volume-slider').addEventListener('input', setVolume);
    document.getElementById('player-favorite').addEventListener('click', () => {
        const currentSong = musicDatabase[currentSongIndex];
        toggleFavorite(currentSong.id);
    });

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            currentPage = 1; // Reset to first page on search
            renderSongs();
        });
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateToPage(page);
        });
    });
    
    // Default volume
    document.getElementById('volume-slider').value = 0.7;
    setVolume();
    
    // Render songs
    renderSongs();
    
    console.log('🎵 SoundWave ready! First click the page, then click songs.');
});
