<template>
    <div class="fixed z-50 w-screen h-screen flex top-0 left-0 p-4 pointer-events-none"
        :class="SnackbarPosition()?.position">
        <div class="flex gap-2" :class="`${SnackbarPosition()?.alignement} ${SnackbarPosition()?.direction}`">
            <transition-group appear :enter-from-class="SnackbarPosition()?.transition"
                enter-to-class="translate-y-0 opacity-100" enter-active-class="transition duration-100 ease-in-out"
                :leave-to-class="SnackbarPosition()?.transition" leave-from-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-100 ease-in-out">
                <div v-for="snackbar in snackbars.snackbars.value" :key="snackbar.id"
                    class="relative max-w-max z-50 pointer-events-auto">
                    <div :style="`background-color: ${SnackbarBackground};`"
                        :class="`${SnackbarType(snackbar)} ${SnackbarShape()}`"
                        class="flex items-center max-w-xl p-3 gap-4 shadow-md border-4 reverse">
                        <div class="text-2xl flex items-center">
                            <Icon class="text-white" v-if="snackbar.type == 'info'" name="material-symbols:info-rounded" />
                            <Icon class="text-red-500" v-if="snackbar.type == 'error'"
                                name="material-symbols:error-rounded" />
                            <Icon class="text-yellow-500" v-if="snackbar.type == 'warning'"
                                name="material-symbols:warning-rounded" />
                            <Icon class="text-teal-500" v-if="snackbar.type == 'success'"
                                name="material-symbols:check-circle-rounded" />
                        </div>
                        <div class="text-lg" :style="`color: ${SnackbarColor};`">
                            <span>{{ snackbar.content }}</span>
                        </div>
                        <div class="text-xl">
                            <button class="flex" :style="`color: ${SnackbarColor};`" @click="snackbars.remove(snackbar.id)">
                                <Icon name="ic:round-close" />
                            </button>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
import { useSnackbars } from '../composables/useSnackbars'
import type { ISnackbar } from '../types/snackbar'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
    inheritAttrs: false,
    props: {
        position: {
            type: String as PropType<"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right">,
            default: "bottom-center"
        },
        shape: {
            type: String as PropType<"rounded" | "oval" | "sharp">,
            default: "oval"
        },
        color: {
            type: String,
            default: '#fff'
        },
        background: {
            type: String,
            default: '#2f2f2f'
        },
    },
    setup(props) {
        const snackbars = useSnackbars()

        function SnackbarType(snackbar: ISnackbar) {
            switch (snackbar.type) {
                case "error":
                    return 'border-red-500'
                case "success":
                    return 'border-teal-500'
                case "info":
                    return 'border-white'
                case "warning":
                    return 'border-yellow-500'
                default:
                    break;
            }
        }

        function SnackbarShape() {
            switch (props.shape) {
                case "oval":
                    return 'rounded-full';
                case "rounded":
                    return 'rounded-lg';
                case "sharp":
                    return 'rounded-none';

                default:
                    break;
            }
        }

        function SnackbarPosition() {
            switch (props.position) {
                case "top-left":
                    return { position: 'justify-start items-start', transition: '-translate-y-2 opacity-0', alignement: 'items-start', direction: 'flex-col-reverse' }
                case "top-center":
                    return { position: 'justify-center items-start', transition: '-translate-y-2 opacity-0', alignement: 'items-center', direction: 'flex-col-reverse' }
                case "top-right":
                    return { position: 'justify-end items-start', transition: '-translate-y-2 opacity-0', alignement: 'items-end', direction: 'flex-col-reverse' }
                case "bottom-left":
                    return { position: 'justify-start items-end', transition: 'translate-y-2 opacity-0', alignement: 'items-start', direction: 'flex-col' }
                case "bottom-center":
                    return { position: 'justify-center items-end', transition: 'translate-y-2 opacity-0', alignement: 'items-center', direction: 'flex-col' }
                case "bottom-right":
                    return { position: 'justify-end items-end', transition: 'translate-y-2 opacity-0', alignement: 'items-end', direction: 'flex-col' }

                default:
                    break;
            }
        }

        const SnackbarColor = props.color
        const SnackbarBackground = props.background

        return { snackbars, SnackbarType, SnackbarPosition, SnackbarShape, SnackbarColor, SnackbarBackground }
    },
})
</script>