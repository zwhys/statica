INSERT INTO
    users (username, hashed_password)
VALUES
    ('admin', '$2b$10$NLTuvAVTPjucQe8fMSKwxOIflgWR4opMu4fdkYbGmm4O5GZbKbKJW');

INSERT INTO 
    exercise_types (exercise_type, colour)
VALUES
    (1, 'Push Up', '#A9D0F4'),       -- Chest
    (2, 'Sit Up', '#F7F7FE'),         -- Core
    (3, 'Pull Up', '#D1B2FF'),        -- Back
    (4, 'Squat', '#B4E7B4'),          -- Legs
    (5, 'Bench Press', '#A9D0F4'),    -- Chest
    (6, 'Shoulder Press', '#FFB366'), -- Shoulders
    (7, 'Romanian Deadlift', '#D1B2FF'), -- Back
    (8, 'Bicep Curl', '#FF80BF'),    -- Arms
    (9, 'Lateral Raises', '#FFB366'), -- Shoulders
    (10, 'Tricep Pushdowns', '#FF80BF'), -- Arms
    (11, 'Reverse Fly', '#D1B2FF'),   -- Back
    (12, 'Bent Over Row', '#D1B2FF'), -- Back
    (13, 'Calf Raises', '#B4E7B4'),   -- Legs
    (14, 'Running', '#B4E7B4'),       -- Legs
    (15, 'L-sit', '#F7F7FE'),         -- Core
    (16, 'Reverse Curl', '#FF80BF'),  -- Arms
    (17, 'Hammer Curl', '#FF80BF'),   -- Arms
    (18, 'Bodyweight Dip', '#A9D0F4'), -- Chest
    (19, 'Handstand', '#F7F7FE'),     -- Core
    (20, 'Tuck Planche', '#F7F7FE');  -- Core


INSERT INTO records (user_id, date_of_entry, exercise_type, sets, reps, remarks, created_at, updated_at, deleted_at) 
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