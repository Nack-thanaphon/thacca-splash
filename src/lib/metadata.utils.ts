// import { getProfileBySlug } from "@/services/superbase.service";
// import type { PageParams } from "@/types/profile";

/**
 * Generates metadata for the profile page
 * @param params - Page parameters containing lang and slug
 * @returns Metadata object for the page
 */
// export async function generateProfileMetadata({ params }: PageParams) {
//     const { slug } = params;

//     try {
//         const { data: profileData, error } = await getProfileBySlug(slug);

//         if (error || !profileData) {
//             return {
//                 title: "Profile not found",
//                 description: "The profile you are looking for does not exist.",
//             };
//         }

//         return {
//             title: profileData.profile_name,
//             description: profileData.details,
//             keywords: `tap-on-it.com, ${profileData.profile_name}, ${profileData.details}`,
//             openGraph: {
//                 title: profileData.profile_name,
//                 description: profileData.details,
//                 images: [profileData.logo ?? "/image/logo.jpg"],
//             },
//         };
//     } catch (error) {
//         console.error("Error generating metadata:", error);
//         return {
//             title: "Profile not found",
//             description: "The profile you are looking for does not exist.",
//         };
//     }
// }

// Placeholder for future metadata utilities
export const metadataUtils = {
    // Add metadata utility functions here
}; 