-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  bio TEXT,
  company VARCHAR(255),
  title VARCHAR(255),
  location VARCHAR(255),
  website VARCHAR(255),
  github_profile VARCHAR(255),
  linkedin_profile VARCHAR(255),
  twitter_profile VARCHAR(255),
  
  -- Settings
  theme VARCHAR(10) DEFAULT 'dark',
  language VARCHAR(10) DEFAULT 'en',
  timezone VARCHAR(50) DEFAULT 'UTC',
  email_verified BOOLEAN DEFAULT FALSE,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  
  -- Subscription
  subscription_plan VARCHAR(20) DEFAULT 'free',
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  plan_expires_at TIMESTAMP,
  
  -- Usage tracking
  websites_created INTEGER DEFAULT 0,
  api_calls_this_month INTEGER DEFAULT 0,
  storage_used_mb INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  
  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  is_banned BOOLEAN DEFAULT FALSE,
  ban_reason VARCHAR(255)
);

-- Projects Table (Websites)
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  name VARCHAR(255) NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  
  -- Content
  html_content TEXT,
  css_content TEXT,
  js_content TEXT,
  
  -- Metadata
  mode VARCHAR(10) DEFAULT 'ai',
  original_prompt TEXT,
  builder_used VARCHAR(50),
  
  -- Settings
  is_public BOOLEAN DEFAULT FALSE,
  is_template BOOLEAN DEFAULT FALSE,
  shared_token VARCHAR(255),
  
  -- Status
  status VARCHAR(20) DEFAULT 'draft',
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP,
  
  -- SEO
  seo_title VARCHAR(255),
  seo_description VARCHAR(500),
  seo_keywords VARCHAR(255),
  
  -- Analytics
  views INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  exports INTEGER DEFAULT 0
);

-- Project Versions (History)
CREATE TABLE IF NOT EXISTS project_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  
  version_number INTEGER NOT NULL,
  html_content TEXT,
  css_content TEXT,
  js_content TEXT,
  
  change_summary VARCHAR(500),
  created_by UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Components Table (100+ components)
CREATE TABLE IF NOT EXISTS components (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  subcategory VARCHAR(100),
  
  html_template TEXT NOT NULL,
  css_template TEXT,
  js_template TEXT,
  
  thumbnail_url TEXT,
  preview_url TEXT,
  
  is_premium BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  
  responsive BOOLEAN DEFAULT TRUE,
  accessibility BOOLEAN DEFAULT TRUE,
  seo_friendly BOOLEAN DEFAULT TRUE,
  
  dependencies JSONB,
  props JSONB,
  
  download_count INTEGER DEFAULT 0,
  rating NUMERIC(2,1) DEFAULT 0,
  
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Templates Table
CREATE TABLE IF NOT EXISTS templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  
  thumbnail_url TEXT,
  preview_url TEXT,
  
  html_content TEXT NOT NULL,
  css_content TEXT,
  js_content TEXT,
  
  is_premium BOOLEAN DEFAULT FALSE,
  price NUMERIC(10,2) DEFAULT 0,
  
  download_count INTEGER DEFAULT 0,
  rating NUMERIC(2,1) DEFAULT 0,
  
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Deployments Table
CREATE TABLE IF NOT EXISTS deployments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  
  deployment_name VARCHAR(255),
  deployment_url VARCHAR(500),
  
  platform VARCHAR(20) DEFAULT 'vercel',
  platform_id VARCHAR(255),
  
  status VARCHAR(20) DEFAULT 'pending',
  error_message TEXT,
  
  deployed_by UUID REFERENCES users(id),
  deployed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Performance metrics
  build_time_ms INTEGER,
  bundle_size_kb INTEGER,
  lighthouse_score INTEGER
);

-- Analytics Table
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  event_type VARCHAR(100),
  event_data JSONB,
  
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Invitations & Sharing
CREATE TABLE IF NOT EXISTS invitations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  
  invited_email VARCHAR(255) NOT NULL,
  inviter_id UUID NOT NULL REFERENCES users(id),
  
  role VARCHAR(20) DEFAULT 'viewer',
  
  status VARCHAR(20) DEFAULT 'pending',
  accepted_by UUID REFERENCES users(id),
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  accepted_at TIMESTAMP
);

-- Favorite Components
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  component_id UUID NOT NULL REFERENCES components(id) ON DELETE CASCADE,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(user_id, component_id)
);

-- Subscription Plans
CREATE TABLE IF NOT EXISTS subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  name VARCHAR(100) NOT NULL UNIQUE,
  price_monthly NUMERIC(10,2),
  price_yearly NUMERIC(10,2),
  
  -- Features
  websites_limit INTEGER,
  storage_gb INTEGER,
  api_calls_monthly INTEGER,
  team_members INTEGER,
  
  features JSONB,
  
  stripe_product_id VARCHAR(255),
  stripe_price_id_monthly VARCHAR(255),
  stripe_price_id_yearly VARCHAR(255),
  
  is_active BOOLEAN DEFAULT TRUE
);

-- Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_is_public ON projects(is_public);
CREATE INDEX IF NOT EXISTS idx_components_category ON components(category);
CREATE INDEX IF NOT EXISTS idx_deployments_project_id ON deployments(project_id);
CREATE INDEX IF NOT EXISTS idx_analytics_project_id ON analytics(project_id);
CREATE INDEX IF NOT EXISTS idx_analytics_user_id ON analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);
