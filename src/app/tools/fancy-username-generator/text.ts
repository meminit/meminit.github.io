interface fontType {
  syntax: string;
  filters: Record<string, string>;
}

export default function textFilter(
  text: string,
  filter: string,
  data: Record<string, fontType>
) {
  let styled = "";

  let transformed = text;

  for (const [char, replacement] of Object.entries(data[filter].filters)) {
    const regex = new RegExp(char, "g");
    transformed = transformed.replaceAll(regex, replacement);
    console.log(transformed);
    styled = data[filter].syntax.replace("{output}", transformed);
    console.log(styled);
  }

  return styled;
}
