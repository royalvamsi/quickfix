-- QuickFix Platform - PostgreSQL Schema DDL

-- 1. Users & Profiles
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role VARCHAR(20) NOT NULL CHECK (role IN ('customer', 'technician', 'admin', 'support')),
    phone VARCHAR(15) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    profile_pic_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) DEFAULT 'Home',
    address_line_1 TEXT NOT NULL,
    address_line_2 TEXT,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Technicians
CREATE TABLE technicians (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    aadhaar_number VARCHAR(12) UNIQUE,
    kyc_status VARCHAR(20) DEFAULT 'Pending' CHECK (kyc_status IN ('Pending', 'Verified', 'Rejected')),
    experience_years INT NOT NULL DEFAULT 0,
    is_online BOOLEAN DEFAULT FALSE,
    rating DECIMAL(3, 2) DEFAULT 0.0,
    total_jobs INT DEFAULT 0,
    approved_by UUID REFERENCES users(id),
    approved_at TIMESTAMP WITH TIME ZONE
);

-- 3. Services & Catalog
CREATE TABLE service_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    icon_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES service_categories(id),
    name VARCHAR(200) NOT NULL,
    description TEXT,
    base_price DECIMAL(10, 2) NOT NULL,
    estimated_duration_mins INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE technician_skills (
    technician_id UUID REFERENCES technicians(user_id) ON DELETE CASCADE,
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    PRIMARY KEY (technician_id, service_id)
);

-- 4. Bookings & Jobs
CREATE TABLE bookings (
    id VARCHAR(20) PRIMARY KEY, -- Friendly ID like QF2847
    customer_id UUID REFERENCES users(id),
    service_id UUID REFERENCES services(id),
    address_id UUID REFERENCES addresses(id),
    technician_id UUID REFERENCES technicians(user_id),
    status VARCHAR(30) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Confirmed', 'Navigating', 'In Progress', 'Payment Pending', 'Completed', 'Cancelled')),
    issue_description TEXT,
    uploaded_image_url TEXT,
    ai_diagnosis TEXT,
    scheduled_at TIMESTAMP WITH TIME ZONE,
    start_otp VARCHAR(4),
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Payments & Invoices
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id VARCHAR(20) REFERENCES bookings(id),
    customer_id UUID REFERENCES users(id),
    amount_total DECIMAL(10, 2) NOT NULL,
    convenience_fee DECIMAL(10, 2) DEFAULT 49.00,
    discount_amount DECIMAL(10, 2) DEFAULT 0.00,
    pg_order_id VARCHAR(100), -- Razorpay Order ID
    pg_payment_id VARCHAR(100),
    status VARCHAR(20) DEFAULT 'Created' CHECK (status IN ('Created', 'Success', 'Failed', 'Refunded')),
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE commissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_id UUID REFERENCES payments(id),
    technician_id UUID REFERENCES technicians(user_id),
    platform_fee_percent DECIMAL(5, 2) NOT NULL,
    platform_fee_amount DECIMAL(10, 2) NOT NULL,
    technician_payout DECIMAL(10, 2) NOT NULL,
    payout_status VARCHAR(20) DEFAULT 'Pending' CHECK (payout_status IN ('Pending', 'Processing', 'Paid')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Ratings & Support
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id VARCHAR(20) REFERENCES bookings(id),
    customer_id UUID REFERENCES users(id),
    technician_id UUID REFERENCES technicians(user_id),
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE support_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id VARCHAR(20) REFERENCES bookings(id),
    user_id UUID REFERENCES users(id),
    subject VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(20) DEFAULT 'Low' CHECK (priority IN ('Low', 'Medium', 'High')),
    status VARCHAR(20) DEFAULT 'Open' CHECK (status IN ('Open', 'In Progress', 'Resolved', 'Closed')),
    assigned_to UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Platform Configs
CREATE TABLE pricing_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rule_name VARCHAR(100) NOT NULL,
    rule_type VARCHAR(50) NOT NULL, -- e.g., 'surge_multiplier', 'distance_fee'
    rule_value DECIMAL(10, 2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
