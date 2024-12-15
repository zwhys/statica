INSERT INTO
    users (username, hashed_password)
VALUES
    ('admin', '$2b$10$NLTuvAVTPjucQe8fMSKwxOIflgWR4opMu4fdkYbGmm4O5GZbKbKJW'),


INSERT INTO 
    exercise_types (exercise_type, colour)
VALUES
    ('Push Up', '#FF5733'),
    ('Sit Up', '#FF8B33');
    ('Pull Up', '#FF8333'),
    ('Squat', '#33FF57'),
    ('Bench Press', '#FFBF33'),
    ('Shoulder Press', '#33B8FF'),
    ('Romanian Deadlift', '#3357FF'),
    ('Bicep Curl', '#F733FF'),
    ('Lateral Raises', '#FF33C7'),
    ('Tricep Pushdowns', '#A833FF'),
    ('Reverse Fly', '#F3FF33'),
    ('Bent Over Row', '#FF4B33'),
    ('Calf Raises', '#FF33EC'),
    ('Running', '#8B33FF'),
    ('L-sit', '#33FF99'),
    ('Reverse Curl', '#FF33A1'),
    ('Hammer Curl', '#33FFDB'),
    ('Bodyweight Dip', '#33D1FF'),
    ('Handstand', '#F7D733'),
    ('Tuck Planche', '#33FFC4'),



-- Insert records for each exercise type
INSERT INTO records (user_id, date_of_entry, exercise_type, sets, reps, remarks, created_at, updated_at, deleted_at) 
VALUES
    (1, '2024-12-26', 'Push Up', 3, 15, 'Feeling good today', NOW(), NOW(), NULL),
    (2, '2024-12-27', 'Push Up', 4, 12, 'Tough but doable', NOW(), NOW(), NULL),

    (1, '2024-12-25', 'Squat', 4, 20, 'Legs feeling strong', NOW(), NOW(), NULL),
    (2, '2024-12-26', 'Squat', 3, 18, 'Focused on depth', NOW(), NOW(), NULL),

    (1, '2024-12-22', 'Bench Press', 4, 10, 'Added extra set', NOW(), NOW(), NULL),
    (2, '2024-12-21', 'Bench Press', 3, 12, 'Increased weight', NOW(), NOW(), NULL),

    (1, '2024-12-26', 'Bicep Curl', 4, 12, 'Increased weight', NOW(), NOW(), NULL),
    (2, '2024-12-27', 'Bicep Curl', 3, 15, 'Felt the burn', NOW(), NOW(), NULL),

    (1, '2024-12-25', 'Leg Press', 4, 15, 'Increased weight', NOW(), NOW(), NULL),
    (2, '2024-12-26', 'Leg Press', 3, 18, 'Focus on full extension', NOW(), NOW(), NULL),

    (1, '2024-12-28', 'Bent Over Row', 4, 12, 'Better form today', NOW(), NOW(), NULL),
    (2, '2024-12-29', 'Bent Over Row', 3, 10, 'Focus on squeeze', NOW(), NOW(), NULL),

    (1, '2024-12-23', 'Shoulder Press', 3, 12, 'Focused on form', NOW(), NOW(), NULL),
    (2, '2024-12-24', 'Shoulder Press', 4, 10, 'Increased weight', NOW(), NOW(), NULL),





-- psql -h localhost -U ZiYan -d railwaydb -f /Users/ZiYan/Desktop/railway/backend/prisma/seed.sql
-- command to run seeding scripts