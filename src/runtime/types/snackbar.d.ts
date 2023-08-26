export interface Snackbar{
    /**
     * Required.
     * Type of the snackbar
     */
    type: "error" | "success" | "warning" | "info",
    /**
     * Required.
     * Text to be displayed in the snackbar
     */
    content: string,
    /**
     * Optional.
     * If set, the snackbar will stay the specified duration before disappearing. Else it will stay indefinitely until the user manually close it.
     */
    duration?: number
}

export interface ISnackbar extends Snackbar{
    id: number
}