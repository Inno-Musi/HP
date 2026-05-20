# microCMS works setup

Create a list-style content API named `works`.

Recommended fields:

| Field ID | Type | Required | Notes |
| --- | --- | --- | --- |
| `slug` | Text field | Yes | Used for detail page URLs, for example `corporate-food-service`. |
| `titleJa` | Text field | Yes | Japanese title. |
| `titleEn` | Text field | No | English title. Falls back to `titleJa`. |
| `descriptionJa` | Text area | No | Japanese card/SEO description. |
| `descriptionEn` | Text area | No | English card/SEO description. Falls back to Japanese. |
| `contentJa` | Rich editor | No | Japanese detail page body. |
| `contentEn` | Rich editor | No | English detail page body. Falls back to Japanese. |
| `categoryJa` | Text field | No | Japanese category label. |
| `categoryEn` | Text field | No | English category label. Falls back to Japanese. |
| `image` | Image | No | Japanese/default cover image. |
| `imageEn` | Image | No | English cover image. Falls back to `image`. |
| `isFeatured` | Boolean | No | Reserved for future homepage display control. |

Publishing flow:

1. Log in to microCMS.
2. Open the MUSICO service.
3. Open `works`.
4. Add or edit a work item.
5. Fill `slug`, title, cover image, description, and rich editor body.
6. Publish.

The site reads:

- `/ja/works` and `/en/works` for the list.
- `/ja/works/[slug]` and `/en/works/[slug]` for detail pages.
- The homepage WORKS section shows the latest 3 published items.
