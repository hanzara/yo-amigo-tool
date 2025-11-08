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
      campaigns: {
        Row: {
          completed_at: string | null
          created_at: string | null
          goal_weights: Json | null
          id: string
          max_variants: number | null
          name: string
          progress: number | null
          repository_id: string
          started_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          goal_weights?: Json | null
          id?: string
          max_variants?: number | null
          name: string
          progress?: number | null
          repository_id: string
          started_at?: string | null
          status: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          goal_weights?: Json | null
          id?: string
          max_variants?: number | null
          name?: string
          progress?: number | null
          repository_id?: string
          started_at?: string | null
          status?: string
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
      deployment_logs: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          mutation_ids: string[] | null
          platform: string
          status: string
          version: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          mutation_ids?: string[] | null
          platform: string
          status: string
          version: string
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          mutation_ids?: string[] | null
          platform?: string
          status?: string
          version?: string
        }
        Relationships: []
      }
      evolution_ledger: {
        Row: {
          created_at: string | null
          description: string
          gain: string
          id: string
          metadata: Json | null
          mutation_id: string
          signature: string
          status: string
          type: string
        }
        Insert: {
          created_at?: string | null
          description: string
          gain: string
          id?: string
          metadata?: Json | null
          mutation_id: string
          signature: string
          status: string
          type: string
        }
        Update: {
          created_at?: string | null
          description?: string
          gain?: string
          id?: string
          metadata?: Json | null
          mutation_id?: string
          signature?: string
          status?: string
          type?: string
        }
        Relationships: []
      }
      evolution_metrics: {
        Row: {
          cost_optimization: number
          cpu_usage: number | null
          created_at: string | null
          error_rate: number | null
          id: string
          memory_usage: number | null
          mutation_success: number
          performance_gain: number
          response_time: number | null
          security_stability: number
        }
        Insert: {
          cost_optimization?: number
          cpu_usage?: number | null
          created_at?: string | null
          error_rate?: number | null
          id?: string
          memory_usage?: number | null
          mutation_success?: number
          performance_gain?: number
          response_time?: number | null
          security_stability?: number
        }
        Update: {
          cost_optimization?: number
          cpu_usage?: number | null
          created_at?: string | null
          error_rate?: number | null
          id?: string
          memory_usage?: number | null
          mutation_success?: number
          performance_gain?: number
          response_time?: number | null
          security_stability?: number
        }
        Relationships: []
      }
      genome_analyses: {
        Row: {
          analysis_data: Json
          created_at: string | null
          efficiency_score: number | null
          id: string
          performance_metrics: Json | null
          repository_id: string | null
          security_issues: Json | null
        }
        Insert: {
          analysis_data: Json
          created_at?: string | null
          efficiency_score?: number | null
          id?: string
          performance_metrics?: Json | null
          repository_id?: string | null
          security_issues?: Json | null
        }
        Update: {
          analysis_data?: Json
          created_at?: string | null
          efficiency_score?: number | null
          id?: string
          performance_metrics?: Json | null
          repository_id?: string | null
          security_issues?: Json | null
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
          confidence: number
          created_at: string | null
          description: string
          genome_analysis_id: string
          id: string
          priority: string
          status: string
          suggestion_type: string
          template_patch: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          confidence?: number
          created_at?: string | null
          description: string
          genome_analysis_id: string
          id?: string
          priority: string
          status?: string
          suggestion_type: string
          template_patch?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          confidence?: number
          created_at?: string | null
          description?: string
          genome_analysis_id?: string
          id?: string
          priority?: string
          status?: string
          suggestion_type?: string
          template_patch?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "genome_suggestions_genome_analysis_id_fkey"
            columns: ["genome_analysis_id"]
            isOneToOne: false
            referencedRelation: "genome_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_comments: {
        Row: {
          comment: string
          created_at: string
          id: string
          lesson_id: string
          user_id: string
        }
        Insert: {
          comment: string
          created_at?: string
          id?: string
          lesson_id: string
          user_id: string
        }
        Update: {
          comment?: string
          created_at?: string
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
          concepts: string[] | null
          created_at: string
          difficulty_level: string
          duration_minutes: number
          id: string
          key_takeaways: string[] | null
          language: string
          learning_objectives: string[] | null
          next_topics: string[] | null
          quiz_data: Json | null
          summary: string
          title: string
          updated_at: string
          user_id: string
          xp_points: number
          youtube_videos: Json | null
        }
        Insert: {
          code_snippet: string
          concepts?: string[] | null
          created_at?: string
          difficulty_level: string
          duration_minutes: number
          id?: string
          key_takeaways?: string[] | null
          language: string
          learning_objectives?: string[] | null
          next_topics?: string[] | null
          quiz_data?: Json | null
          summary: string
          title: string
          updated_at?: string
          user_id: string
          xp_points: number
          youtube_videos?: Json | null
        }
        Update: {
          code_snippet?: string
          concepts?: string[] | null
          created_at?: string
          difficulty_level?: string
          duration_minutes?: number
          id?: string
          key_takeaways?: string[] | null
          language?: string
          learning_objectives?: string[] | null
          next_topics?: string[] | null
          quiz_data?: Json | null
          summary?: string
          title?: string
          updated_at?: string
          user_id?: string
          xp_points?: number
          youtube_videos?: Json | null
        }
        Relationships: []
      }
      marketplace_items: {
        Row: {
          code_template: string
          created_at: string | null
          description: string | null
          downloads: number | null
          id: string
          optimization_type: string
          price_credits: number | null
          rating: number | null
          seller_id: string
          tags: string[] | null
          title: string
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          code_template: string
          created_at?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          optimization_type: string
          price_credits?: number | null
          rating?: number | null
          seller_id: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          code_template?: string
          created_at?: string | null
          description?: string | null
          downloads?: number | null
          id?: string
          optimization_type?: string
          price_credits?: number | null
          rating?: number | null
          seller_id?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: []
      }
      mutation_tests: {
        Row: {
          cost_per_request: number | null
          cpu_usage: number | null
          created_at: string | null
          id: string
          latency_ms: number | null
          memory_usage: number | null
          mutation_id: string | null
          pass_rate: number | null
          test_results: Json
        }
        Insert: {
          cost_per_request?: number | null
          cpu_usage?: number | null
          created_at?: string | null
          id?: string
          latency_ms?: number | null
          memory_usage?: number | null
          mutation_id?: string | null
          pass_rate?: number | null
          test_results: Json
        }
        Update: {
          cost_per_request?: number | null
          cpu_usage?: number | null
          created_at?: string | null
          id?: string
          latency_ms?: number | null
          memory_usage?: number | null
          mutation_id?: string | null
          pass_rate?: number | null
          test_results?: Json
        }
        Relationships: [
          {
            foreignKeyName: "mutation_tests_mutation_id_fkey"
            columns: ["mutation_id"]
            isOneToOne: false
            referencedRelation: "mutations"
            referencedColumns: ["id"]
          },
        ]
      }
      mutations: {
        Row: {
          campaign_id: string | null
          confidence_score: number | null
          created_at: string | null
          description: string | null
          id: string
          improvement_metrics: Json | null
          mutated_code: string
          mutation_type: string
          original_code: string
          repository_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          campaign_id?: string | null
          confidence_score?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          improvement_metrics?: Json | null
          mutated_code: string
          mutation_type: string
          original_code: string
          repository_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string | null
          confidence_score?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          improvement_metrics?: Json | null
          mutated_code?: string
          mutation_type?: string
          original_code?: string
          repository_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mutations_repository_id_fkey"
            columns: ["repository_id"]
            isOneToOne: false
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          },
        ]
      }
      repositories: {
        Row: {
          created_at: string | null
          default_branch: string | null
          genome_fingerprint: Json | null
          health_score: number | null
          id: string
          last_analyzed_at: string | null
          name: string
          provider: string
          updated_at: string | null
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          default_branch?: string | null
          genome_fingerprint?: Json | null
          health_score?: number | null
          id?: string
          last_analyzed_at?: string | null
          name: string
          provider: string
          updated_at?: string | null
          url: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          default_branch?: string | null
          genome_fingerprint?: Json | null
          health_score?: number | null
          id?: string
          last_analyzed_at?: string | null
          name?: string
          provider?: string
          updated_at?: string | null
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string
          id: string
          lesson_id: string
          quiz_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id: string
          quiz_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          id?: string
          lesson_id?: string
          quiz_score?: number | null
          updated_at?: string
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
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
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
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
