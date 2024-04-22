import supabase from "./supabase";

export async function getSections(courseId) {
  let { data: sections, error } = await supabase
    .from("sections")
    .select("*")
    // Filters
    .eq("course_id", courseId);

  if (error) {
    console.log(error);
    throw new Error("Could not load sections");
  }
  return sections;
}
