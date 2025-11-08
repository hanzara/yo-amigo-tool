export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analysis_runs: {
        Row: {
          analysis_type: string
          completed_at: string | null
          created_at: string
          duration_seconds: number | null
          id: string
          repository_id: string | null
          results: Json | null
          status: string
          user_id: string
        }
        Insert: {
          analysis_type: string
          completed_at?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          repository_id?: string | null
          results?: Json | null
          status?: string
          user_id: string
        }
        Update: {
          analysis_type?: string
          completed_at?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          repository_id?: string | null
          results?: Json | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          created_at: string | null
          description: string | null
          goal_weights: Json | null
          id: string
          max_variants: number | null
          name: string
          progress: number | null
          repository_id: string | null
          status: string | null
          updated_at: string | null
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          goal_weights?: Json | null
          id?: string
          max_variants?: number | null
          name: string
          progress?: number | null
          repository_id?: string | null
          status?: string | null
          updated_at?: string | null
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          goal_weights?: Json | null
          id?: string
          max_variants?: number | null
          name?: string
          progress?: number | null
          repository_id?: string | null
          status?: string | null
          updated_at?: string | null
          url?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      debug_sessions: {
        Row: {
          code: string
          created_at: string | null
          fixes_applied: Json | null
          id: string
          issues_found: Json | null
          language: string
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string | null
          fixes_applied?: Json | null
          id?: string
          issues_found?: Json | null
          language: string
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string | null
          fixes_applied?: Json | null
          id?: string
          issues_found?: Json | null
          language?: string
          user_id?: string
        }
        Relationships: []
      }
      genome_analyses: {
        Row: {
          analysis_data: Json | null
          created_at: string
          efficiency_score: number | null
          id: string
          performance_metrics: Json | null
          repository_id: string | null
          security_issues: Json | null
          user_id: string
        }
        Insert: {
          analysis_data?: Json | null
          created_at?: string
          efficiency_score?: number | null
          id?: string
          performance_metrics?: Json | null
          repository_id?: string | null
          security_issues?: Json | null
          user_id: string
        }
        Update: {
          analysis_data?: Json | null
          created_at?: string
          efficiency_score?: number | null
          id?: string
          performance_metrics?: Json | null
          repository_id?: string | null
          security_issues?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "genome_analyses_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      genome_suggestions: {
        Row: {
          confidence: number | null
          created_at: string | null
          description: string | null
          genome_id: string | null
          id: string
          priority: string | null
          repository_id: string | null
          status: string | null
          suggestion_type: string | null
          template_patch: string | null
          title: string
          user_id: string
        }
        Insert: {
          confidence?: number | null
          created_at?: string | null
          description?: string | null
          genome_id?: string | null
          id?: string
          priority?: string | null
          repository_id?: string | null
          status?: string | null
          suggestion_type?: string | null
          template_patch?: string | null
          title: string
          user_id: string
        }
        Update: {
          confidence?: number | null
          created_at?: string | null
          description?: string | null
          genome_id?: string | null
          id?: string
          priority?: string | null
          repository_id?: string | null
          status?: string | null
          suggestion_type?: string | null
          template_patch?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "genome_suggestions_genome_id_fkey"
            columns: ["genome_id"]
            isOneToOne: false
            referencedRelation: "genomes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "genome_suggestions_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      genomes: {
        Row: {
          created_at: string | null
          description: string | null
          efficiency_score: number | null
          fingerprint: string | null
          health_score: number | null
          id: string
          name: string
          repository_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          efficiency_score?: number | null
          fingerprint?: string | null
          health_score?: number | null
          id?: string
          name: string
          repository_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          efficiency_score?: number | null
          fingerprint?: string | null
          health_score?: number | null
          id?: string
          name?: string
          repository_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "genomes_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      health_metrics: {
        Row: {
          complexity_score: number | null
          created_at: string
          files_analyzed: number | null
          id: string
          issues_fixed: number | null
          issues_found: number | null
          maintainability_score: number | null
          overall_score: number
          performance_score: number | null
          repository_id: string | null
          security_score: number | null
          user_id: string
        }
        Insert: {
          complexity_score?: number | null
          created_at?: string
          files_analyzed?: number | null
          id?: string
          issues_fixed?: number | null
          issues_found?: number | null
          maintainability_score?: number | null
          overall_score: number
          performance_score?: number | null
          repository_id?: string | null
          security_score?: number | null
          user_id: string
        }
        Update: {
          complexity_score?: number | null
          created_at?: string
          files_analyzed?: number | null
          id?: string
          issues_fixed?: number | null
          issues_found?: number | null
          maintainability_score?: number | null
          overall_score?: number
          performance_score?: number | null
          repository_id?: string | null
          security_score?: number | null
          user_id?: string
        }
        Relationships: []
      }
      help_requests: {
        Row: {
          assigned_mentor_id: string | null
          code_snippet: string | null
          created_at: string | null
          description: string
          id: string
          language: string | null
          specialization:
            | Database["public"]["Enums"]["mentor_specialization"]
            | null
          status: Database["public"]["Enums"]["help_request_status"] | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assigned_mentor_id?: string | null
          code_snippet?: string | null
          created_at?: string | null
          description: string
          id?: string
          language?: string | null
          specialization?:
            | Database["public"]["Enums"]["mentor_specialization"]
            | null
          status?: Database["public"]["Enums"]["help_request_status"] | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assigned_mentor_id?: string | null
          code_snippet?: string | null
          created_at?: string | null
          description?: string
          id?: string
          language?: string | null
          specialization?:
            | Database["public"]["Enums"]["mentor_specialization"]
            | null
          status?: Database["public"]["Enums"]["help_request_status"] | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "help_requests_assigned_mentor_id_fkey"
            columns: ["assigned_mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_comments: {
        Row: {
          comment: string
          created_at: string | null
          id: string
          lesson_id: string
          user_id: string
        }
        Insert: {
          comment: string
          created_at?: string | null
          id?: string
          lesson_id: string
          user_id: string
        }
        Update: {
          comment?: string
          created_at?: string | null
          id?: string
          lesson_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_comments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          code_snippet: string
          concepts: Json | null
          created_at: string | null
          difficulty_level: string | null
          duration_minutes: number | null
          id: string
          language: string
          quiz_data: Json | null
          summary: string | null
          title: string
          updated_at: string | null
          user_id: string
          xp_points: number | null
          youtube_videos: Json | null
        }
        Insert: {
          code_snippet: string
          concepts?: Json | null
          created_at?: string | null
          difficulty_level?: string | null
          duration_minutes?: number | null
          id?: string
          language: string
          quiz_data?: Json | null
          summary?: string | null
          title: string
          updated_at?: string | null
          user_id: string
          xp_points?: number | null
          youtube_videos?: Json | null
        }
        Update: {
          code_snippet?: string
          concepts?: Json | null
          created_at?: string | null
          difficulty_level?: string | null
          duration_minutes?: number | null
          id?: string
          language?: string
          quiz_data?: Json | null
          summary?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
          xp_points?: number | null
          youtube_videos?: Json | null
        }
        Relationships: []
      }
      mentor_reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          id: string
          mentor_id: string
          rating: number | null
          session_id: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: string
          mentor_id: string
          rating?: number | null
          session_id: string
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: string
          mentor_id?: string
          rating?: number | null
          session_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentor_reviews_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentor_reviews_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "mentor_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      mentor_sessions: {
        Row: {
          created_at: string | null
          duration_minutes: number | null
          ended_at: string | null
          help_request_id: string | null
          id: string
          mentor_id: string
          started_at: string | null
          total_cost: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          duration_minutes?: number | null
          ended_at?: string | null
          help_request_id?: string | null
          id?: string
          mentor_id: string
          started_at?: string | null
          total_cost?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          duration_minutes?: number | null
          ended_at?: string | null
          help_request_id?: string | null
          id?: string
          mentor_id?: string
          started_at?: string | null
          total_cost?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentor_sessions_help_request_id_fkey"
            columns: ["help_request_id"]
            isOneToOne: false
            referencedRelation: "help_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentor_sessions_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
        ]
      }
      mentors: {
        Row: {
          bio: string | null
          created_at: string | null
          hourly_rate: number
          id: string
          languages_known: string[] | null
          name: string
          profile_image_url: string | null
          rating: number | null
          specialization: Database["public"]["Enums"]["mentor_specialization"]
          total_sessions: number | null
          updated_at: string | null
          user_id: string | null
          verified: boolean | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          hourly_rate: number
          id?: string
          languages_known?: string[] | null
          name: string
          profile_image_url?: string | null
          rating?: number | null
          specialization: Database["public"]["Enums"]["mentor_specialization"]
          total_sessions?: number | null
          updated_at?: string | null
          user_id?: string | null
          verified?: boolean | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          hourly_rate?: number
          id?: string
          languages_known?: string[] | null
          name?: string
          profile_image_url?: string | null
          rating?: number | null
          specialization?: Database["public"]["Enums"]["mentor_specialization"]
          total_sessions?: number | null
          updated_at?: string | null
          user_id?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      mutation_history: {
        Row: {
          action: string
          created_at: string | null
          id: string
          mutation_id: string | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          mutation_id?: string | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          mutation_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mutation_history_mutation_id_fkey"
            columns: ["mutation_id"]
            isOneToOne: false
            referencedRelation: "mutations"
            referencedColumns: ["id"]
          },
        ]
      }
      mutation_tests: {
        Row: {
          code_after: string | null
          code_before: string | null
          completed_at: string | null
          created_at: string
          fitness_score: number | null
          id: string
          mutation_type: string
          repository_id: string | null
          status: string
          test_results: Json | null
          user_id: string
        }
        Insert: {
          code_after?: string | null
          code_before?: string | null
          completed_at?: string | null
          created_at?: string
          fitness_score?: number | null
          id?: string
          mutation_type: string
          repository_id?: string | null
          status?: string
          test_results?: Json | null
          user_id: string
        }
        Update: {
          code_after?: string | null
          code_before?: string | null
          completed_at?: string | null
          created_at?: string
          fitness_score?: number | null
          id?: string
          mutation_type?: string
          repository_id?: string | null
          status?: string
          test_results?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      mutations: {
        Row: {
          campaign_id: string | null
          code_after: string | null
          code_before: string | null
          composite_score: number | null
          confidence_score: number | null
          created_at: string
          description: string
          id: string
          improvement_metrics: Json | null
          mutation_type: string
          repository_id: string | null
          status: string
          user_id: string
        }
        Insert: {
          campaign_id?: string | null
          code_after?: string | null
          code_before?: string | null
          composite_score?: number | null
          confidence_score?: number | null
          created_at?: string
          description: string
          id?: string
          improvement_metrics?: Json | null
          mutation_type: string
          repository_id?: string | null
          status?: string
          user_id: string
        }
        Update: {
          campaign_id?: string | null
          code_after?: string | null
          code_before?: string | null
          composite_score?: number | null
          confidence_score?: number | null
          created_at?: string
          description?: string
          id?: string
          improvement_metrics?: Json | null
          mutation_type?: string
          repository_id?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mutations_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mutations_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          name: string
          repository_url: string | null
          team_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          name: string
          repository_url?: string | null
          team_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          repository_url?: string | null
          team_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      repositories: {
        Row: {
          branch: string | null
          created_at: string
          genome_fingerprint: Json | null
          health_score: number | null
          id: string
          last_analyzed_at: string | null
          name: string
          provider: string | null
          updated_at: string
          url: string | null
          user_id: string
        }
        Insert: {
          branch?: string | null
          created_at?: string
          genome_fingerprint?: Json | null
          health_score?: number | null
          id?: string
          last_analyzed_at?: string | null
          name: string
          provider?: string | null
          updated_at?: string
          url?: string | null
          user_id: string
        }
        Update: {
          branch?: string | null
          created_at?: string
          genome_fingerprint?: Json | null
          health_score?: number | null
          id?: string
          last_analyzed_at?: string | null
          name?: string
          provider?: string | null
          updated_at?: string
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          id: string
          joined_at: string | null
          role: Database["public"]["Enums"]["team_role"] | null
          team_id: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string | null
          role?: Database["public"]["Enums"]["team_role"] | null
          team_id: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string | null
          role?: Database["public"]["Enums"]["team_role"] | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          lesson_id: string
          quiz_score: number | null
          time_spent_minutes: number | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          lesson_id: string
          quiz_score?: number | null
          time_spent_minutes?: number | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          lesson_id?: string
          quiz_score?: number | null
          time_spent_minutes?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      help_request_status: "open" | "in_progress" | "completed" | "cancelled"
      mentor_specialization:
        | "backend"
        | "frontend"
        | "fullstack"
        | "ai_ml"
        | "data_science"
        | "cybersecurity"
        | "mobile"
        | "devops"
      team_role: "admin" | "editor" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      help_request_status: ["open", "in_progress", "completed", "cancelled"],
      mentor_specialization: [
        "backend",
        "frontend",
        "fullstack",
        "ai_ml",
        "data_science",
        "cybersecurity",
        "mobile",
        "devops",
      ],
      team_role: ["admin", "editor", "viewer"],
    },
  },
} as const
