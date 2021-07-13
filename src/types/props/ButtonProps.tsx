import { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = {
    clicked: boolean,
} & ComponentPropsWithoutRef<"button">;