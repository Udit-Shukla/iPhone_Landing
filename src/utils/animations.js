export const animateWithGsapTimeline =(
    timeline,
    rotationRef,rotationState,firsttarget,secondTarget,animationProps
)=>{
    timeline.to(rotationRef.current.rotation,{
        y:rotationState,
        duration:1,
        ease:'power2.inOut',
    })

    timeline.to(firsttarget,{
        ...animationProps,
        ease:'power2.inOut',
    },'<')

    timeline.to(secondTarget,{
        ...animationProps,
        ease:'power2.inOut',
    },'<')
}