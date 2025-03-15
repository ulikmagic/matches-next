Архитектура проекта: Классическая [https://www.youtube.com/watch?v=c3JGBdxfYcU&t=202s&ab_channel=UlbiTV]

Примечание:
Выбор технологий
UI Kit: Использовал Tailwind CSS для простоты и быстроты разработки. В случае большого и разнообразного UI kit в дизайне использовал сочетание styled-components + MUI, что позволяет легко интегрировать компоненты и стили.

SSR/SSG/ISR: Эти технологии не были использованы, так как данные по матчам загружаются динамически. В будущем, при добавлении WebSocket или других динамичных данных, SSR могут вызвать перегрузку сервера.

Идеи и замечание:

1. Пагинация: В дизайне и ЭП отсутствует пагинация. Рекомендуется добавить её в будущем.
2. Сортировка по статусам. Предлагаю сортировку по статусам в списке матчах. Сначала идут live и конец finished
3. Загрузочные компоненты: Для сценариев загрузки или отсутствия матчей добавлены компоненты Skeleton и List. Предлагаю добавить в дизайн
4. Изображения: Добавьте картинку по умолчанию (например, @/assets/no-image), на случай, если изображения не будут приходить.
5. Безопасность: Next.js позволяет скрыть токены и API-эндпоинты на стороне клиента, что повышает безопасность. Напоминаю!
6. Будущие возможности Next: В будущем можно будет использовать ISR/SSR/SSG для расширения приложения, например, для страницы с итоговым счётом матча, с добавлением schema.org.
