<?php
/**
 * Plugin Name:     Guten Tailwind Tab
 * Plugin URI:      https://github.com/ahsanshaheen199/guten-tailwind-tab
 * Description:     This is a tab block plugin.
 * Author:          Ahsan Habib Shaheen
 * Author URI:      https://profiles.wordpress.org/ahsan03/
 * Text Domain:     gtt
 * Domain Path:     /languages
 * Version:         1.1.0
 *
 * @package         Guten_Tailwind_Tab
 */

defined( 'ABSPATH' ) || exit;

/**
 * Guten Tailwind Tab Class.
 */
final class Guten_Tailwind_Tab {
	/**
	 * Plugin Version
	 *
	 * @var string
	 */
	private $version = '1.1.0';

	/**
	 * Initialize Guten_Tailwind_Tab class
	 *
	 * @return Guten_Tailwind_Tab
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
			wp_set_script_translations( 'guten-tailwind-tab', 'gtt', plugin_dir_path( __FILE__ ) . 'languages' );
		}
	}
}

function guten_tailwind_tab()
{
    return Guten_Tailwind_Tab::instance();
}

guten_tailwind_tab();
