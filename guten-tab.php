<?php
/**
 * Plugin Name:     Guten Tab
 * Plugin URI:      https://github.com/ahsanshaheen199/guten-tab
 * Description:     This is a tab block plugin.
 * Author:          Ahsan Habib Shaheen
 * Author URI:      https://profiles.wordpress.org/ahsan03/
 * Text Domain:     gtt
 * Domain Path:     /languages
 * Version:         1.1.0
 *
 * @package         Guten_Tab
 */

defined( 'ABSPATH' ) || exit;

/**
 * Guten Tab Class.
 */
final class Guten_Tab {
	/**
	 * Plugin Version
	 *
	 * @var string
	 */
	private $version = '1.1.0';

	/**
	 * Initialize Guten_Tailwind_Tab class
	 *
	 * @return Guten_Tab
	 */
	public static function instance() {
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

		return $instance;
	}

	/**
	 * Construtor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_block_types_init' ) );
		add_action( 'init', array( $this, 'load_textdomain' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_frontend_scripts' ) );
	}

	/**
	 * Register Block
	 */
	public function register_block_types_init() {
		register_block_type( __DIR__ . '/build/tabs' );
		register_block_type( __DIR__ . '/build/tab' );
	}

	/**
	 * Load all translations for our plugin from the MO file.
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'gtt', false, basename( __DIR__ ) . '/languages' );

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'guten-tab', 'gtt', plugin_dir_path( __FILE__ ) . 'languages' );
		}
	}

	public function add_frontend_scripts() {
		wp_enqueue_script( 'guten-tab-frontend', plugin_dir_url( __FILE__ ) . 'src/blocks/frontend.js', array( 'jquery' ), '1.0', true );
	}
}

function guten_tab()
{
    return Guten_Tab::instance();
}

guten_tab();
