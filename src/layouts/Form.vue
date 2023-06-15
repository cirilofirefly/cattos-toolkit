<template>
    <form>
        <div>
            <slot  name="title"></slot>
        </div> 
        <div>
            <slot name="fields"></slot>
        </div>
        <div>
            <slot name="buttons"></slot>
        </div> 
    </form>
</template>