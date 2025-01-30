INSERT INTO
    users (username, "hashedPassword")
VALUES
    ('admin', '$2b$10$NLTuvAVTPjucQe8fMSKwxOIflgWR4opMu4fdkYbGmm4O5GZbKbKJW');

INSERT INTO 
    exercise_types ("exerciseType", color)
VALUES
   ('Bicep Curl', '#FF80BF'),    -- Arms
   ('Hammer Curl', '#FF80BF'),   -- Arms
   ('Reverse Curl', '#FF80BF'),  -- Arms
   ('Tricep Pushdowns', '#FF80BF'), -- Arms
   ('Bent Over Row', '#D1B2FF'), -- Back
   ('Reverse Fly', '#D1B2FF'),   -- Back
   ('Romanian Deadlift', '#D1B2FF'), -- Back
   ('Pull Up', '#D1B2FF'),       -- Back
   ('Bench Press', '#A9D0F4'),   -- Chest
   ('Bodyweight Dip', '#A9D0F4'),-- Chest
   ('Push Up', '#A9D0F4'),       -- Chest
   ('Shoulder Press', '#FFB366'),-- Shoulders
   ('Lateral Raises', '#FFB366'),-- Shoulders
   ('Squat', '#B4E7B4'),         -- Legs
   ('Calf Raises', '#B4E7B4'),   -- Legs
   ('Running', '#B4E7B4'),       -- Legs
   ('L-sit', '#F7F7FE'),         -- Core
   ('Sit Up', '#F7F7FE'),        -- Core
   ('Handstand', '#F7F7FE'),     -- Core
   ('Tuck Planche', '#F7F7FE');  -- Core



INSERT INTO records ("userId", "dateOfEntry", "exerciseType", sets, reps, remarks, created_at, updated_at, deleted_at) 
VALUES
    (1, '2025-02-01', 'Push Up', 4, 15, 'Pushed for more reps', NOW(), NOW(), NULL),
    (1, '2025-02-02', 'Sit Up', 4, 20, 'Feeling the burn', NOW(), NOW(), NULL),
    (1, '2025-02-03', 'Pull Up', 3, 10, 'Got a few extra in', NOW(), NOW(), NULL),
    (1, '2025-02-04', 'Squat', 4, 20, 'Legs sore from last session', NOW(), NOW(), NULL),
    (1, '2025-02-05', 'Bench Press', 4, 10, 'Increased weight by 5kg', NOW(), NOW(), NULL),
    (1, '2025-02-06', 'Shoulder Press', 3, 12, 'Focusing on clean form', NOW(), NOW(), NULL),
    (1, '2025-02-07', 'Romanian Deadlift', 4, 12, 'Lower back felt strong', NOW(), NOW(), NULL),
    (1, '2025-02-08', 'Bicep Curl', 4, 12, 'Added a few more reps', NOW(), NOW(), NULL),
    (1, '2025-02-09', 'Lateral Raises', 3, 15, 'Nice control throughout', NOW(), NOW(), NULL),
    (1, '2025-02-10', 'Tricep Pushdowns', 4, 12, 'Slightly increased weight', NOW(), NOW(), NULL),
    (1, '2025-02-11', 'Reverse Fly', 4, 12, 'Good form today', NOW(), NOW(), NULL),
    (1, '2025-02-12', 'Bent Over Row', 4, 12, 'Focused on full range of motion', NOW(), NOW(), NULL),
    (1, '2025-02-13', 'Calf Raises', 5, 20, 'Slow and controlled', NOW(), NOW(), NULL),
    (1, '2025-02-14', 'Running', 1, 5, 'High intensity run', NOW(), NOW(), NULL),
    (1, '2025-02-15', 'L-sit', 3, 30, 'Held longer than usual', NOW(), NOW(), NULL),
    (1, '2025-02-16', 'Reverse Curl', 4, 12, 'Good contraction', NOW(), NOW(), NULL),
    (1, '2025-02-17', 'Hammer Curl', 4, 12, 'Kept it strict', NOW(), NOW(), NULL),
    (1, '2025-02-18', 'Bodyweight Dip', 4, 15, 'Slightly deeper dips', NOW(), NOW(), NULL),
    (1, '2025-02-19', 'Handstand', 3, 5, 'Held balance for longer', NOW(), NOW(), NULL),
    (1, '2025-02-20', 'Tuck Planche', 3, 20, 'Great improvement', NOW(), NOW(), NULL);

-- psql -h localhost -U ZiYan -d staticadb -f /Users/ZiYan/Desktop/statica/backend/prisma/seed.sql
-- command to run seeding scripts