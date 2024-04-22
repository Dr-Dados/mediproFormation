import supabase from "./supabase";

export async function getChapters(sectionId) {
  let { data: chapters, error } = await supabase
    .from("chapters")
    .select("*")
    // Filters
    .eq("sectionId", sectionId);

  if (error) {
    console.log(error);
    throw new Error("Could not load sections");
  }
  return chapters;
}
