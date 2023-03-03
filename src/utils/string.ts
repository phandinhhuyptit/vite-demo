export function mergeClasses(classes: unknown[]) {
    return classes.filter(Boolean).join(' ')
}