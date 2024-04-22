import supabase from "./supabase";

export async function getCourses() {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) {
    console.log(error);
    throw new Error("courses could not be loaded");
  }
  return data;
}


