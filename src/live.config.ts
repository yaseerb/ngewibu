/**
 * EmDash Live Content Collections
 *
 * Defines the _emdash collection that handles all content types from the database.
 * Query specific types using getEmDashCollection() and getEmDashEntry().
 */

import { defineLiveCollection, defineCollection, z } from "astro:content";
import { emdashLoader } from "emdash/runtime";

// Definisikan koleksi anime
const animeCollection = defineCollection({
  loader: emdashLoader(),
  schema: z.object({
    title: z.string(),
    synopsis: z.string().optional(),
    rating: z.number().min(1).max(10).optional(),
    genre: z.array(z.string()).optional(),
    // tambahkan field lain sesuai kebutuhan
  }),
});

export const collections = {
  _emdash: defineLiveCollection({ loader: emdashLoader() }),
  anime: animeCollection, // 👈 daftarkan di sini
};
