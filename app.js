const tl = gsap.timeline({default:{duration:.75}})

tl.fromTo(".car-1",{x:"-130vh"},{x:"130vh", repeat:-1, duration:5 , ease:"none"})
tl.fromTo(".car-2",{x:"-130vh"},{x:"130vh", repeat:-1, duration:7, ease:"none"},"<")