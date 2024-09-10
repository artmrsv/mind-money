export interface FieldRadiusProps {
  withoutLeftRadius?: boolean;
  withoutRightRadius?: boolean;
}

export const getFieldStyles = (
  withoutLeftRadius?: boolean,
  withoutRightRadius?: boolean,
  sx?: any
) => {
  return {
    "& .MuiFilledInput-root": {
      ...(withoutLeftRadius && {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }),
      ...(withoutRightRadius && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }),
    },
    ...(sx || {}),
  };
};
