/**
 * @param type
 * Switch type at catch statement to defined handler for specific function
 */
export function AsyncErrorHandler(type?: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = async () => {
      try {
        return await method.apply(this, arguments);
      } catch (error) {
        console.error(error);
      }
    };
  };
}
