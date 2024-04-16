import supabase from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) {
    console.log(error);
    throw new Error("courses could not be loaded");
  }
  return data;
}

export async function getSections() {
  let { data: sections, error } = await supabase.from("sections").select("*");

  if (error) {
    console.log(error);
  }
  return sections;
}
